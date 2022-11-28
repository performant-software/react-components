// @flow

import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
import { withParentSize } from '@visx/responsive';
import {
  LinkHorizontal,
  LinkHorizontalCurve,
  LinkHorizontalLine,
  LinkHorizontalStep,
  LinkRadial,
  LinkRadialCurve,
  LinkRadialLine,
  LinkRadialStep,
  LinkVertical,
  LinkVerticalCurve,
  LinkVerticalLine,
  LinkVerticalStep
} from '@visx/shape';
import { pointRadial } from 'd3-shape';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type ComponentType,
  type Element
} from 'react';
import _ from 'underscore';
import withZoom, { type ZoomProps } from '../hooks/Zoom';
import './TreeGraph.css';

type Props = ZoomProps & {
  data: any,
  layout: string,
  linkType: string,
  offset: number,
  orientation: string,
  parentHeight: number,
  parentWidth: number,
  linkColor: string,
  linkWidth: number,
  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number
  },
  renderNode?: (data: any) => Element<any>,
  stepPercent: number
};

const Layout = {
  cartesian: 'cartesian',
  polar: 'polar'
};

const LinkType = {
  curve: 'curve',
  line: 'line',
  step: 'step'
};

const Orientation = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

const TreeGraph = (props: Props) => {
  const ref = useRef();

  const innerWidth = props.parentWidth - props.margin.left - props.margin.right;
  const innerHeight = props.parentHeight - props.margin.top - props.margin.bottom;

  /**
   * Sets the link component based on the layout, linkType, and orientation props.
   *
   * @type {*}
   */
  const LinkComponent = useMemo(() => {
    let value;

    if (props.layout === Layout.polar) {
      if (props.linkType === LinkType.step) {
        value = LinkRadialStep;
      } else if (props.linkType === LinkType.curve) {
        value = LinkRadialCurve;
      } else if (props.linkType === LinkType.line) {
        value = LinkRadialLine;
      } else {
        value = LinkRadial;
      }
    } else if (props.orientation === Orientation.vertical) {
      if (props.linkType === LinkType.step) {
        value = LinkVerticalStep;
      } else if (props.linkType === LinkType.curve) {
        value = LinkVerticalCurve;
      } else if (props.linkType === LinkType.line) {
        value = LinkVerticalLine;
      } else {
        value = LinkVertical;
      }
    } else if (props.linkType === LinkType.step) {
      value = LinkHorizontalStep;
    } else if (props.linkType === LinkType.curve) {
      value = LinkHorizontalCurve;
    } else if (props.linkType === LinkType.line) {
      value = LinkHorizontalLine;
    } else {
      value = LinkHorizontal;
    }

    return value;
  }, [props.layout, props.linkType, props.orientation]);

  /**
   * Returns the depth of the last expanded node.
   *
   * @type {function(*, *): *}
   */
  const getMaxDepth = useCallback((node, depth) => {
    let max = depth;

    if (node.isExpanded) {
      max = _.max(_.map(node.children, (child) => getMaxDepth(child, depth + 1)));
    }

    return max;
  }, []);

  /**
   * Returns the node position for the passed coordinates.
   *
   * @type {function(*, *): {top: *, left: *}}
   */
  const getNodePosition = useCallback((x, y) => {
    let top;
    let left;

    if (props.layout === Layout.polar) {
      const [radialX, radialY] = pointRadial(x, y);
      top = radialY;
      left = radialX;
    } else if (props.orientation === Orientation.vertical) {
      top = y;
      left = x;
    } else {
      top = x;
      left = y;
    }

    return {
      top,
      left
    };
  }, [props.layout, props.orientation]);

  /**
   * Returns the position and size of the root node.
   *
   * @type {{sizeWidth: *, origin: *, sizeHeight: *}}
   */
  const root = useMemo(() => {
    let sizeWidth;
    let sizeHeight;
    let origin;

    const depth = getMaxDepth(props.data, 1);

    if (props.layout === Layout.polar) {
      origin = {
        x: innerWidth / 2,
        y: innerHeight / 2,
      };
      sizeWidth = 2 * Math.PI;
      sizeHeight = (Math.min(innerWidth, innerHeight) / 2) * (depth / 2);
    } else {
      origin = { x: 0, y: 0 };
      if (props.orientation === Orientation.vertical) {
        sizeWidth = innerWidth;
        sizeHeight = innerHeight;
      } else {
        sizeWidth = innerHeight;
        sizeHeight = innerWidth;
      }
    }

    return {
      sizeWidth,
      sizeHeight,
      origin
    };
  }, [getMaxDepth, innerHeight, innerWidth, props.data, props.layout, props.orientation]);

  const renderNode = useCallback((node) => (
    <foreignObject>
      { props.renderNode(node.data) }
    </foreignObject>
  ), [props.renderNode]);

  /**
   * Renders the group element for the passed node.
   *
   * @type {unknown}
   */
  const renderGroup = useCallback((node, key) => {
    const { top, left } = getNodePosition(node.x, node.y);

    return (
      <Group
        nodeleft={left}
        nodetop={top}
        top={top}
        left={left}
        key={key}
      >
        { renderNode(node) }
      </Group>
    );
  }, [renderNode, props.layout, props.orientation, props.linkType]);

  /**
   * Resizes the "circle" and "rect" elements based on the text contained in the group. This effect will also
   * convert text into multiple lines.
   */
  useEffect(() => {
    const { current } = ref;
    if (current) {
      const groups = current.getElementsByTagName('g');
      _.each(groups, (group) => {
        const object = _.first(group.getElementsByTagName('foreignObject'));
        if (object && object.firstChild) {
          const { offsetWidth: width, offsetHeight: height } = object.firstChild;

          // Set the width and height of the foreignObject element
          object.setAttribute('width', width);
          object.setAttribute('height', height);

          // Transform the position of the group element based on the width and height of the contents
          const leftPosition = parseFloat(group.getAttribute('nodeleft'));
          const topPosition = parseFloat(group.getAttribute('nodetop'));

          if (!_.isNaN(leftPosition) && !_.isNaN(topPosition)) {
            const transform = `translate(${leftPosition - (width / 2.0)}, ${topPosition - (height / 2.0)})`;
            group.setAttribute('transform', transform);
          }
        }
      });
    }
  }, [props.data, props.layout, props.orientation, props.linkType]);

  return (
    <div
      className='tree-graph'
      style={{
        display: 'flex',
        flexGrow: '1'
      }}
    >
      <svg
        width={props.parentWidth}
        height={props.parentHeight - props.offset}
        ref={props.zoom.containerRef}
      >
        { props.renderZoomContainer() }
        <Group
          top={props.margin.top}
          left={props.margin.left}
          transform={props.zoom.toString()}
        >
          <Tree
            root={hierarchy(props.data, (d) => (d.isExpanded ? d.children : null))}
            size={[root.sizeWidth, root.sizeHeight]}
            separation={(a, b) => (a.parent === b.parent ? 1 : 2) / a.depth}
          >
            { (tree) => (
              <Group
                innerRef={ref}
                left={root.origin.x}
                top={root.origin.y}
              >
                { tree.links().map((link, i) => (
                  <LinkComponent
                    key={i}
                    data={link}
                    percent={props.stepPercent}
                    stroke={props.linkColor}
                    strokeWidth={props.linkWidth}
                    fill='none'
                  />
                ))}
                { _.map(tree.descendants(), renderGroup) }
              </Group>
            )}
          </Tree>
        </Group>
      </svg>
    </div>
  );
};

TreeGraph.defaultProps = {
  layout: Layout.cartesian,
  linkColor: '#B2B09B',
  linkType: LinkType.line,
  linkWidth: 1,
  margin: {
    top: 30,
    left: 30,
    right: 30,
    bottom: 70
  },
  offset: 0,
  orientation: Orientation.horizontal,
  stepPercent: 0.5
};

const TreeGraphComponent: ComponentType<any> = withParentSize(withZoom(TreeGraph));
export default TreeGraphComponent;

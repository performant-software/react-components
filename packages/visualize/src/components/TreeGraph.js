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
  fontSize: number,
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
  nodeWidth: number,
  onClick?: (data: any) => void,
  renderNode?: (data: any) => Element<any>,
  renderText?: (data: any) => Element<any>,
  stepPercent: number,
  textColor: string
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

const Circle: ComponentType<any> = (props: any) => (
  <circle
    r={props.radius}
    {...props}
  />
);

const Rectangle: ComponentType<any> = (props: any) => (
  <rect
    {...props}
  />
);

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

  /**
   * Renders the passed node. If provided, only the "renderNode" prop is called.
   *
   * @type {(function(*): (*))|*}
   */
  const renderNode = useCallback((node) => {
    if (props.renderNode) {
      return props.renderNode(node.data);
    }

    if (node.depth === 0) {
      return (
        <Circle
          fill='#FF4A4A'
          onClick={props.onClick && props.onClick.bind(this, node.data)}
        />
      );
    }

    return (
      <Rectangle
        fill='#272b4d'
        stroke={node.data.children ? '#03c0dc' : '#26deb0'}
        strokeWidth={1}
        strokeDasharray={node.data.children ? '0' : '2,2'}
        strokeOpacity={node.data.children ? 1 : 0.6}
        rx={node.data.children ? 0 : 10}
        onClick={props.onClick && props.onClick.bind(this, node.data)}
      />
    );
  }, [props.onClick, props.renderNode]);

  /**
   * Renders the text for the passed node.
   *
   * @type {(function(*): (*))|*}
   */
  const renderText = useCallback((node) => {
    if (props.renderText) {
      return props.renderText(node.data);
    }

    return (
      <text
        dy='0.33em'
        fontSize={props.fontSize}
        textAnchor='middle'
        fill={props.textColor}
      >
        { node.data.name }
      </text>
    );
  }, [props.renderText]);

  /**
   * Renders the group element for the passed node.
   *
   * @type {unknown}
   */
  const renderGroup = useCallback((node, key) => {
    const { top, left } = getNodePosition(node.x, node.y);

    return (
      <Group
        top={top}
        left={left}
        key={key}
      >
        { renderNode(node) }
        { renderText(node) }
      </Group>
    );
  }, [renderNode, renderText, props.layout, props.orientation]);

  /**
   * Resizes the "circle" and "rect" elements based on the text contained in the group. This effect will also
   * convert text into multiple lines.
   */
  useEffect(() => {
    const { current } = ref;
    if (current) {
      const padding = 15;
      const groups = current.getElementsByTagName('g');
      _.each(groups, (group) => {
        const circle = _.first(group.getElementsByTagName('circle'));
        const rect = _.first(group.getElementsByTagName('rect'));

        const text = _.first(group.getElementsByTagName('text'));
        const { height } = text.getBBox();

        if (!text.getElementsByTagName('tspan').length) {
          const words = text.innerHTML.split(/\s+/);

          const lines = [];
          let lineIndex = 0;

          for (let i = 0; i < words.length; i += 1) {
            // Initialize the line array for the current line
            if (!lines[lineIndex]) {
              lines[lineIndex] = [];
            }

            // Add the current word to the current line
            lines[lineIndex].push(words[i]);

            // Look ahead to the next word and increment the line index if necessary
            if (i < words.length - 1) {
              const testElement = text.cloneNode();
              testElement.innerHTML = [...lines[lineIndex], words[i + 1]].join(' ');
              group.append(testElement);

              if (testElement.getBBox().width > props.nodeWidth) {
                lineIndex += 1;
              }

              testElement.remove();
            }
          }

          // Append the lines to the text element
          _.each(lines, (line, index) => {
            const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
            tspan.setAttribute('x', '0');
            if (index > 0) {
              tspan.setAttribute('dy', `${height}px`);
            }
            tspan.appendChild(document.createTextNode(line.join(' ')));

            if (index === 0) {
              text.replaceChildren(tspan);
            } else {
              text.appendChild(tspan);
            }
          });

          // Set the shape attributes based on the text size
          const bbox = text.getBBox();
          if (circle && text) {
            circle.setAttribute('x', bbox.x - padding);
            circle.setAttribute('y', bbox.y - padding);
            circle.setAttribute('r', (bbox.width / 2) + padding);
          } else if (rect && text) {
            rect.setAttribute('x', bbox.x - padding);
            rect.setAttribute('y', bbox.y - padding);
            rect.setAttribute('width', bbox.width + 2 * padding);
            rect.setAttribute('height', bbox.height + 2 * padding);
          }
        }
      });
    }
  }, [props.data]);

  return (
    <div
      className='tree-graph'
      ref={ref}
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
                top={root.origin.y}
                left={root.origin.x}
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
  fontSize: 12,
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
  nodeWidth: 75,
  offset: 0,
  orientation: Orientation.horizontal,
  stepPercent: 0.5,
  textColor: '#FFFFFF'
};

type TreeGraphType = ComponentType<any> & {
  Circle: typeof Circle,
  Rectangle: typeof Rectangle
};

const TreeGraphComponent: TreeGraphType = withParentSize(withZoom(TreeGraph));
TreeGraphComponent.Circle = Circle;
TreeGraphComponent.Rectangle = Rectangle;

export default TreeGraphComponent;

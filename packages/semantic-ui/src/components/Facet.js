// @flow

import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  type Node
} from 'react';
import {
  Accordion,
  Divider,
  Header,
  Icon
} from 'semantic-ui-react';
import './Facet.css';

type Props = {
  /**
   * Facet content to display inside the accordion menu.
   */
  children: Node,

  /**
   * Classname to apply to the root element.
   */
  className?: string,

  /**
   * If `true`, the facet will be expanded by default.
   */
  defaultActive?: boolean,

  /**
   * If `true`, a divider will be rendered between each facet in the list.
   */
  divided?: boolean,

  /**
   * React ref element to apply to the expand/collapse functions.
   */
  innerRef?: {
    current: ?HTMLElement
  },

  /**
   * Callback fired when the facet active state is toggled.
   */
  onActive?: () => void,

  /**
   * Facet title to display at the top.
   */
  title: string,

  /**
   * If `true`, the facet will be visible in the DOM.
   */
  visible?: boolean
};

/**
 * This component can be used as a wrapper to display various types of facets (list, toggle, etc).
 */
const Facet = (props: Props) => {
  const [active, setActive] = useState(props.defaultActive);

  /**
   * Sets the class name variable for the Accordion component.
   *
   * @type {string}
   */
  const className = useMemo(() => {
    const classNames = ['facet'];

    if (!props.visible) {
      classNames.push('hidden');
    }

    if (props.className) {
      classNames.push(props.className);
    }

    return classNames.join(' ');
  }, [props.className, props.visible]);

  /**
   * Expose collapse/expand functions on the ref object to allow parent components to imperatively open/close.
   */
  useImperativeHandle(props.innerRef, () => ({
    collapse: () => setActive(false),
    expand: () => setActive(true)
  }));

  useEffect(() => {
    if (active && props.onActive) {
      props.onActive();
    }
  }, [active]);

  return (
    <>
      <Accordion
        className={className}
      >
        <Accordion.Title
          active={active}
          index={0}
          onClick={() => setActive((prevActive) => !prevActive)}
        >
          <div
            className='facet-title'
          >
            <Header
              content={props.title}
              size='tiny'
            />
            <Icon
              name='dropdown'
            />
          </div>
        </Accordion.Title>
        <Accordion.Content
          active={active}
        >
          { props.children }
        </Accordion.Content>
      </Accordion>
      { props.divided && (
        <Divider />
      )}
    </>
  );
};

Facet.defaultProps = {
  children: undefined,
  defaultActive: true,
  divided: false,
  visible: true
};

export type {
  Props
};

export default Facet;

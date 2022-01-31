// @flow

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Node
} from 'react';
import { Dropdown, Ref } from 'semantic-ui-react';

type Props = {
  children: Node,
  onClick?: () => void
};

const DropdownMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const onMouseEnter = useCallback(() => setOpen(true), []);
  const onMouseLeave = useCallback(() => setOpen(false), []);

  /**
   * Adds/removes the mouseenter/mouseleave events.
   */
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', onMouseEnter);
      ref.current.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', onMouseEnter);
        ref.current.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [ref]);

  return (
    <Ref
      innerRef={ref}
    >
      <Dropdown
        {...props}
        open={open}
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }

          setOpen(false);
        }}
      >
        <Dropdown.Menu>
          { props.children }
        </Dropdown.Menu>
      </Dropdown>
    </Ref>
  );
};

DropdownMenu.defaultProps = {
  onClick: undefined
};

export default DropdownMenu;

import React, { useMemo } from 'react';
import clsx from 'clsx';
import { findByType } from '../helpers/Element';

interface NavbarProps {
  children: React.ReactNode
  className?: string
  divider?: boolean;
}

interface ChildrenProps {
  children: React.ReactNode
}

interface TabProps extends any {
  active: boolean
  as?: React.FC | string
  href?: string
  label: string
  onClick?: string
}

type NavbarComponent = React.FC<NavbarProps> & {
  Controls: React.FC<ChildrenProps>
  Tab: React.FC<TabProps>
  Tabs: React.FC<ChildrenProps>
  Logo: React.FC<ChildrenProps>
}

const Navbar: NavbarComponent = (props) => {
  const logo = findByType(props.children, Navbar.Logo);
  const tabs = findByType(props.children, Navbar.Tabs);
  const controls = findByType(props.children, Navbar.Controls);

  return (
    <nav
      className={clsx(
        'w-full flex justify-between items-center text-zinc-950 px-8 py-3',
        props.className
      )}
    >
      <div
        className={clsx(
          'flex',
          { 'divide-x divide-solid divide-zinc-200': props.divider }
        )}
      >
        {logo}
        {tabs}
      </div>
      {controls}
    </nav>
  );
};

Navbar.Logo = (props: ChildrenProps) => {
  return (
    <div className='pr-4 max-h-8 shrink-0'>
      {props.children}
    </div>
  );
};
Navbar.Logo.displayName = 'Navbar.Logo'

Navbar.Tabs = (props: ChildrenProps) => {
  return (
    <div className='flex gap-3 pl-4'>
      {props.children}
    </div>
  );
};
Navbar.Tabs.displayName = 'Navbar.Tabs'

Navbar.Tab = (props: TabProps) => {
  const WrapperComponent = useMemo(() => props.href ? 'a' : 'button', [props.href]);

  // for a11y, render as links when a URL is passed
  const wrapperProps = useMemo(() => ({
    href: props.href,
    onClick: props.onClick,
    type: props.href ? undefined : 'button'
  }), [props.href, props.onClick]);

  if (props.as) {
    return (
      <props.as { ...props } as={undefined} />
    );
  }

  return (
    <WrapperComponent
      data-active={props.active}
      className='text-sm p-2 font-semibold relative rounded-lg hover:bg-gray-200'
      {...wrapperProps}
    >
      {props.label}
      {props.active && (
        <div
          className='absolute bottom-[-6px] left-[0px] w-full h-0.5 rounded-full bg-zinc-950'
        />
      )}
    </WrapperComponent>
  );
};
Navbar.Tab.displayName = 'Navbar.Tab'

Navbar.Controls = (props: ChildrenProps) => {
  return (
    <div className='flex gap-4'>
      {props.children}
    </div>
  );
};
Navbar.Controls.displayName = 'Navbar.Controls'

export default Navbar;

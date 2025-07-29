import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Element } from '@performant-software/shared-components';

interface Props {
  children: React.ElementType | React.ElementType[]
  divider?: boolean;
}

const Navbar: React.FC<Props> = (props) => {
  const logo = Element.findByType(props.children, Navbar.Logo)
  const tabs = Element.findByType(props.children, Navbar.Tabs)
  const controls = Element.findByType(props.children, Navbar.Controls)

  return (
    <nav className='w-full flex justify-between items-center text-zinc-950'>
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
  )
}

interface LogoProps {
  children: React.ElementType | React.ElementType[]
}

Navbar.Logo = (props: LogoProps) => {
  return (
    <div className='pr-4 max-h-8 shrink-0'>
      {props.children}
    </div>
  )
}

Navbar.Tabs = (props: { children: React.ElementType | React.ElementType[] }) => {
  return (
    <div className='flex gap-3 pl-4'>
      {props.children}
    </div>
  )
}

interface Tab {
  active: boolean
  as?: React.FC | string
  href?: string
  label: string
  onClick?: string
}

Navbar.Tab = (props: Tab) => {
  const WrapperComponent = useMemo(() => props.href ? 'a' : 'button', [props.href])

  // for a11y, render as links when a URL is passed
  const wrapperProps = useMemo(() => ({
    href: props.href,
    onClick: props.onClick,
    type: props.href ? undefined : 'button'
  }), [props.href, props.onClick])

  if (props.as) {
    return (
      <props.as { ...props } as={undefined} />
    )
  }

  return (
    <WrapperComponent
      data-active={props.active}
      className='text-sm p-2 font-semibold relative rounded-lg hover:bg-gray-200 dark:text-white hover:dark:bg-zinc-600'
      {...wrapperProps}
    >
      {props.label}
      {props.active && (
        <div
          className='absolute bottom-[-6px] left-[0px] w-full h-0.5 rounded-full bg-zinc-950 dark:bg-white'
        />
      )}
    </WrapperComponent>
  )
}

interface ControlProps {
  children: React.ElementType | React.ElementType[]
}

Navbar.Controls = (props: ControlProps) => {
  return (
    <div className='flex gap-4'>
      {props.children}
    </div>
  )
}

export default Navbar;

import React, { useMemo } from 'react';
import { findElement } from '../util/components';

interface Props {
  children: React.ElementType | React.ElementType[]
  divider?: boolean;
}

const Navbar: React.FC<Props> = (props) => {
  const logo = findElement(props.children, Navbar.Logo)
  const tabs = findElement(props.children, Navbar.Tabs)
  const controls = findElement(props.children, Navbar.Controls)

  return (
    <nav className='w-full flex justify-between items-center text-zinc-950'>
      <div className={`flex ${props.divider ? 'divide-x divide-solid divide-zinc-200' : ''}`}>
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
  as?: React.FC
  label: string
  active: boolean
  url?: string
  onClick?: string
}

Navbar.Tab = (props: Tab) => {
  const wrapperClass = `text-sm p-2 font-semibold relative rounded-lg hover:bg-gray-200`

  // for a11y, render as links when a URL is passed
  const wrapper = useMemo(() => ({
    component: props.url ? 'a' : 'button',
    props: props.url
      ? { href: props.url }
      : { onClick: props.onClick, type: 'button' }
  }), [props.url, props.onClick])

  return (
    <wrapper.component
      data-active={props.active}
      className={wrapperClass}
      {...wrapper.props}
    >
      {props.label}
      {props.active && (
        <div
          className='absolute bottom-[-6px] left-[0px] w-full h-0.5 rounded-full bg-zinc-950'
        />
      )}
    </wrapper.component>
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

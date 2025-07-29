import React from 'react';
import { Element } from '@performant-software/shared-components';

interface Props {
  children: React.ElementType | React.ElementType[]
}

const Card: React.FC<Props> = (props) => {
  const top = Element.findByType(props.children, Card.Top)
  const middle = Element.findByType(props.children, Card.Middle)
  const bottom = Element.findByType(props.children, Card.Bottom)

  return (
    <div className='rounded-lg shadow-md'>
      {top}
      {middle}
      {bottom}
    </div>
  )
}

interface TopProps {
  children: React.ElementType | React.ElementType[]
}

Card.Top = (props: TopProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

interface MiddleProps {
  children: React.ElementType | React.ElementType[]
}

Card.Middle = (props: MiddleProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

interface BottomProps {
  children: React.ElementType | React.ElementType[]
}

Card.Bottom = (props: BottomProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Card

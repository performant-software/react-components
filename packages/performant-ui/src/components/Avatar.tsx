import clsx from 'clsx'
import React from 'react'

interface Props {
  alt?: string
  initials: string
  src?: string
  classes?: {
    container?: string
    img?: string
    initials?: string
  }
}

const Avatar: React.FC<Props> = (props) => {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-full bg-black text-white inline select-none w-10 h-10 font-sans',
        props.classes?.container,
      )}
    >
      {props.src
        ? (
            <img
              alt={props.alt}
              className={clsx(
                'object-cover w-full h-full',
                props.classes?.img
              )}
              src={props.src}
            />
          )
        : (
            <span
              className={clsx(
                'p-1 h-full w-full flex items-center justify-center',
                props.classes?.initials
              )}
            >
              {props.initials}
            </span>
          )}
    </div>
  )
}

export default Avatar

import clsx from 'clsx';
import React from 'react';

const colors = {
  faircopy: 'bg-[#E9ECF5] hover:bg-[#CED8E9] text-[#324872]',
  green: 'bg-green-100 hover:bg-green-200 text-green-500',
  gray: 'bg-gray-100 hover:bg-gray-200 text-gray-500',
  red: 'bg-red-100 hover:bg-red-200 text-red-500',
  blue: 'bg-blue-100 hover:bg-blue-200 text-blue-500'
} as const;

interface Props {
  className?: string
  children: React.ReactNode
  color?: keyof typeof colors
}

const Badge: React.FC<Props> = (props) => {
  const color = props.color || 'faircopy';

  return (
    <span className={clsx(
      'py-1 px-1.5 rounded-md text-xs font-semibold',
      colors[color],
      props.className
    )}>
      {props.children}
    </span>
  );
};

export default Badge;
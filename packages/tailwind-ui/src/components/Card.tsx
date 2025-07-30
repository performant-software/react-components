import React from 'react';
import clsx from 'clsx';

interface Props {
  children: React.ElementType | React.ElementType[]
  className?: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className={clsx('rounded-lg shadow-md divide-y divide-zinc-200 dark:bg-zinc-900 dark:text-white dark:divide-zinc-700', props.className)}>
      {props.children}
    </div>
  );
};

interface CardSectionProps {
  children: React.ElementType | React.ElementType[]
  className?: string
  padded?: boolean
}

Card.Section = (props: CardSectionProps) => {
  const padded = typeof props.padded === 'undefined'
    ? true
    : props.padded;

  return (
    <div className={clsx({ 'py-5 px-6': padded }, props.className)}>
      {props.children}
    </div>
  );
};

export default Card;

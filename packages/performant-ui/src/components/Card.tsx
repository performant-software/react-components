import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode
  className?: string
}

interface CardSectionProps {
  children: React.ReactNode
  className?: string
  padded?: boolean
}

type CardComponent = React.FC<CardProps> & {
  Section: React.FC<CardSectionProps>;
};

const Card: CardComponent = (props) => {
  return (
    <div className={clsx(
      'rounded-lg shadow-sm divide-y divide-zinc-200 dark:bg-zinc-900 dark:text-white dark:divide-zinc-700',
      props.className
    )}>
      {props.children}
    </div>
  );
};

Card.Section = (props: CardSectionProps) => {
  const { padded = true } = props;

  return (
    <div className={clsx({ 'py-5 px-6': padded }, props.className)}>
      {props.children}
    </div>
  );
};

export default Card;

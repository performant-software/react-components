// @flow

import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';
import Button from './Button';
import RecordDetailTitle from './RecordDetailTitle';
import _ from 'underscore';
import RecordDetailItem from './RecordDetailItem';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * Content to be rendered as the blurb
   */
  children?: Node,

  /**
   * Class name to apply to the main div.
   */
  className?: string,

  /**
   * List of detail fields to be rendered above the blurb
   */
  detailItems?: Array<{ text: string, icon?: string, className?: string }>,

  /**
   * If a URL for a record detail page is provided, will render a button that links to it
   */
  detailPageUrl?: string,

  /**
   * The icon to display before the header.
   */
  icon?: string,

  /**
   * The text of the header.
   */
  title: string,

  /**
   * Additional classes to apply to the title element
   */
  titleClassName?: string
};

const RecordDetailHeader = (props: Props) => (
  <div
    className={clsx(
      'flex',
      'flex-col',
      'gap-4',
      'px-6',
      'pt-6',
      'pb-4',
      props.className
    )}
  >
    <RecordDetailTitle
      text={props.title}
      icon={props.icon}
      className={props.titleClassName}
    />
    <ul>
      {
        _.map(props.detailItems, (item, idx) => (
          <RecordDetailItem
            text={item.text}
            icon={item.icon}
            className={item.className}
            key={idx}
          />
        ))
      }
    </ul>
    <div>
      { props.children }
    </div>
    { props.detailPageUrl && (
      <a href={props.detailPageUrl}>   
        <Button rounded customClassName='w-full justify-center'>
          { i18n.t('RecordDetailHeader.viewDetails') }
        </Button>
      </a>
    )}
  </div>
);

export default RecordDetailHeader;

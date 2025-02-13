// @flow

import clsx from 'clsx';
import React from 'react';
import _ from 'underscore';
import Button from './Button';
import RecordDetailTitle from './RecordDetailTitle';
import RecordDetailItem from './RecordDetailItem';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * Content to be rendered as the blurb
   */
  children?: Node,

  /**
   * Class names to apply to the main div, the title element, and the list element containing the detail items.
   */
  classNames?: { items?: string, root?: string, title?: string },

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
      props.classNames?.root
    )}
  >
    <RecordDetailTitle
      text={props.title}
      icon={props.icon}
      className={props.classNames?.title}
    />
    {
      !!props.detailItems?.length && (
        <ul className={props.classNames?.items}>
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
      )
    }
    <div>
      { props.children }
    </div>
    { props.detailPageUrl && (
      <a href={props.detailPageUrl}>
        <Button rounded className='w-full justify-center'>
          { i18n.t('RecordDetailHeader.viewDetails') }
        </Button>
      </a>
    )}
  </div>
);

export default RecordDetailHeader;

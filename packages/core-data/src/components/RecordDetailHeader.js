// @flow

import clsx from 'clsx';
import React from 'react';
import Button from './Button';
import RecordDetailTitle from './RecordDetailTitle';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * Class names to apply to the main div, the title element, and the list element containing the detail items.
   */
  classNames?: { items?: string, root?: string, title?: string },

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
    { props.detailPageUrl && (
      <a
        href={props.detailPageUrl}
      >
        <Button
          className='w-full justify-center'
          rounded
        >
          { i18n.t('RecordDetailHeader.viewDetails') }
        </Button>
      </a>
    )}
  </div>
);

export default RecordDetailHeader;

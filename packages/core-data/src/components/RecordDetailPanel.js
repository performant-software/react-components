// @flow

import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';
import Button from './Button';
import RecordDetailTitle from './RecordDetailTitle';
import RecordDetailItem from './RecordDetailItem';
import AccordionItemsList from './AccordionItemsList';
import RecordDetailHeader from './RecordDetailHeader';
import type { RelatedRecordsList } from '../types/RelatedRecordsList';
import i18n from '../i18n/i18n';
import _ from 'underscore';

type Props = {
  /**
   * A list of navigation breadcrumbs to be rendered above the title
   */
  breadcrumbs?: Array<string>,

  /**
   * Content to be rendered as the blurb
   */
  children?: Node,

  /**
   * Class names to apply to the root div, the header box, the title element, the list element containing the detail items, and the accordion list containing related records
   */
  classNames?: { header?: string, items?: string, relatedRecords?: string, root?: string, title?: string },

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
   * A function called when the `close` icon is clicked
   */
  onClose?: () => void,

  /**
   * A function called when the back arrow is clicked
   */
  onGoBack?: () => void,

  /**
   * An array of lists of related records for different model types
   */
  relations?: Array<RelatedRecordsList>,

  /**
   * The text of the header.
   */
  title: string,
};

const RecordDetailPanel = (props: Props) => (
  <div
    className={clsx(
      'relative',
      'shadow-[0px_5px_12px_0px_rgba(0,0,0,.10)]',
      props.classNames?.root
    )}
  >
    { props.onClose && (
      <Icon
        name='close'
        size='24'
        onClick={props.onClose}
        className='absolute top-6 right-6'
      />
    )}
    <RecordDetailHeader
      title={props.title}
      icon={props.icon}
      classNames={
        { 
          root: clsx('sticky', 'inset-0', 'shadow-[0px_1px_4px_0px_rgba(0,0,0,.15)]', props.classNames?.header), 
          title: clsx(props.classNames?.title, { 'pr-6': props.onClose }), //make sure there's space for the close icon
          items: props.classNames?.items 
        }
      }
      detailItems={props.detailItems}
      detailPageUrl={props.detailPageUrl}
    >
      { props.children }
    </RecordDetailHeader>
    <AccordionItemsList
      className={clsx('overflow-auto', props.classNames?.relatedRecords)}
      relations={props.relations}
    />
  </div>
);

export default RecordDetailPanel;

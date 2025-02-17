// @flow

import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';
import AccordionItemsList from './AccordionItemsList';
import RecordDetailHeader from './RecordDetailHeader';
import type { RelatedRecordsList } from '../types/RelatedRecordsList';
import RecordDetailBreadcrumbs from './RecordDetailBreadcrumbs';

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
   * Class names to apply to the root div, the header box, the title element,
   * the list element containing the detail items, and the accordion list containing related records
   */
  classNames?: { header?: string, items?: string, relatedRecords?: string, root?: string, title?: string },

  /**
   * If true, the number of related records will be displayed for each type
   */
  count?: Boolean,

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
      'overflow-y-auto',
      props.classNames?.root
    )}
  >
    <div className='sticky inset-0 shadow-[0px_1px_4px_0px_rgba(0,0,0,.15)] bg-white z-[5]'>
      { props.onClose && (
        <div onClick={props.onClose} onKeyDown={props.onClose} tabIndex='0' role='button' className='absolute top-6 right-6 z-10 cursor-pointer'>
          <Icon
            name='close'
            size={24}
          />
        </div>
      )}
      { (props.breadcrumbs || props.onGoBack) && (
        <RecordDetailBreadcrumbs
          history={props.breadcrumbs || []}
          onGoBack={props.onGoBack}
          className='absolute top-6 left-6 pr-6 max-w-[calc(100%_-4.5em)] z-10'
        />
      ) }
      <RecordDetailHeader
        title={props.title}
        icon={props.icon}
        classNames={
          {
            root: clsx({ 'pt-16': props.breadcrumbs || props.onGoBack }, props.classNames?.header),
            title: clsx(props.classNames?.title, { 'pr-6': props.onClose }), // make sure there's space for the close icon
            items: props.classNames?.items
          }
        }
        detailItems={props.detailItems}
        detailPageUrl={props.detailPageUrl}
      >
        { props.children }
      </RecordDetailHeader>
    </div>
    <AccordionItemsList
      className={clsx('shadow-[0px_1px_4px_rgba(0,0,0,.15)]', props.classNames?.relatedRecords)}
      items={props.relations}
      count={props.count}
    />
  </div>
);

export default RecordDetailPanel;

// @flow

import React, { lazy } from 'react';
import withSuspense from '../hooks/Suspense';
import './RichTextArea.css';

type Props = {
  formats?: any,
  modules?: any,
  onChange: (value: string) => void,
  placeholder?: string,
  value: ?string
};

const ReactQuill = lazy(() => import('react-quill'));

const SEARCH_EMPTY = '<p><br></p>';
const REPLACE_EMPTY = '';

const RichTextArea = withSuspense(({formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video'
  ], modules = {
    toolbar: [[{
      header: '1'
    }, {
      header: '2'
    }, {
      font: []
    }], [{
      size: []
    }], [
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote'
    ], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }, {
      indent: '-1'
    }, {
      indent: '+1'
    }], [
      'link',
      'image'
    ], [
      'clean'
    ]],
    clipboard: {
      matchVisual: false
    }
  }, placeholder = undefined, ...props}: Props) => (
  <ReactQuill
    className='rich-text-area'
    formats={formats}
    modules={modules}
    onChange={(value) => {
      let newValue = value;

      if (value === SEARCH_EMPTY) {
        newValue = REPLACE_EMPTY;
      }

      props.onChange(newValue);
    }}
    placeholder={placeholder}
    theme='snow'
    value={props.value}
  />
));

export default RichTextArea;
export type { Props as RichTextAreaProps };

// @flow

import React from 'react';
import ReactQuill from 'react-quill';
import './RichTextArea.css';

type Props = {
  formats?: any,
  modules?: any,
  onChange: (value: string) => void,
  placeholder?: string,
  theme?: string,
  value: ?string
};

const SEARCH_EMPTY = '<p><br></p>';
const REPLACE_EMPTY = '';

const RichTextArea = (props: Props) => (
  <ReactQuill
    className='rich-text-area'
    formats={props.formats}
    modules={props.modules}
    onChange={(value) => {
      let newValue = value;

      if (value === SEARCH_EMPTY) {
        newValue = REPLACE_EMPTY;
      }

      props.onChange(newValue);
    }}
    placeholder={props.placeholder}
    theme={props.theme}
    value={props.value}
  />
);

RichTextArea.defaultProps = {
  formats: [
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
  ],
  modules: {
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
  },
  placeholder: undefined,
  theme: 'snow'
};

export default RichTextArea;
export type { Props as RichTextAreaProps };

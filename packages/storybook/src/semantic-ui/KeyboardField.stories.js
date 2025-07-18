// @flow

import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import English from 'simple-keyboard-layouts/build/layouts/english';
import Arabic from 'simple-keyboard-layouts/build/layouts/arabic';
import KeyboardField from '../../../semantic-ui/src/components/KeyboardField';

export default {
  title: 'Components/Semantic UI/KeyboardField',
  component: KeyboardField
};

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <Form>
      <KeyboardField
        id='test-field'
        label='Field'
        layout={English}
        name='test-field'
        onChange={(e, data) => setValue(data.value)}
        value={value}
      >
        <input
          className='english'
          type='text'
        />
      </KeyboardField>
    </Form>
  );
};

export const MultipleOnOneForm = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <Form>
      <KeyboardField
        id='test-field-1'
        label='Field'
        layout={English}
        name='test-field-1'
        onChange={(e, data) => setValue(data.value)}
        value={value}
      >
        <input
          className='english'
          type='text'
        />
      </KeyboardField>
      <KeyboardField
        id='test-field-2'
        label='Field'
        layout={Arabic}
        name='test-field-2'
        onChange={(e, data) => setValue2(data.value)}
        value={value2}
      >
        <input
          className='arabic'
          dir='rtl'
          type='text'
        />
      </KeyboardField>
    </Form>
  );
};

export const WithAlternativeCharacters = () => {
  const [value, setValue] = useState('');
  const exampleTransliterationLayout = {
    layout: {
      default: [
        '` 1 2 3 4 5 6 7 8 9 0 ʾ ʿ — {bksp}',
        '{tab} q w e r t y u i o p [ ] \\',
        "{lock} a s d f g h j k l ; ' {enter}",
        '{shift} z x c v b n m , . / {shift}',
        '.com @ {space}'
      ],
      shift: [
        '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
        '{tab} Q W E R T Y U I O P { } |',
        '{lock} A S D F G H J K L : " {enter}',
        '{shift} Z X C V B N M < > ? {shift}',
        '.com @ {space}'
      ]
    },
    enableLayoutCandidates: true,
    layoutCandidates: {
      a: 'ā á à â',
      c: 'ç',
      d: 'ḍ',
      e: 'ē é è æ ə',
      g: 'ğ',
      h: 'ḥ',
      i: 'ī i ı í ï',
      k: 'ḳ',
      o: 'о̄ ö',
      s: 'ṣ ş',
      t: 'ṭ',
      u: 'ū ü',
      z: 'ẓ',
      A: 'Ā Á À Â Ä',
      D: 'Ḍ',
      G: 'Ğ',
      H: 'Ḥ',
      I: 'Ī İ I Í Ï',
      K: 'Ḳ',
      O: 'Ō Ö',
      S: 'Ṣ Ş',
      T: 'Ṭ',
      U: 'Ū Ü',
      Z: 'Ẓ'
    }
  };

  return (
    <Form>
      <KeyboardField
        id='test-field'
        label='Field'
        layout={exampleTransliterationLayout}
        name='test-field'
        onChange={(e, data) => setValue(data.value)}
        value={value}
      >
        <input
          className='english'
          type='text'
        />
      </KeyboardField>
    </Form>
  );
};

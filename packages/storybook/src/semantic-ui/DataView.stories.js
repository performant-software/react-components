// @flow

import { withA11y } from '@storybook/addon-a11y';
import { select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import _ from 'underscore';
import DataView from '../../../semantic-ui/src/components/DataView';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/DataView',
  decorators: [withA11y, withKnobs]
};

export const Default = useDragDrop(() => (
  <DataView
    items={[{
      id: 'variants',
      group: 'Text',
      label: 'Variants',
      url: 'https://evq-staging.herokuapp.com/api/variants'
    }, {
      id: 'annotations',
      group: 'Text',
      label: 'Annotations',
      url: 'https://evq-staging.herokuapp.com/api/annotations'
    }, {
      id: 'manuals',
      group: 'Resources',
      label: 'Manuals',
      url: 'https://evq-staging.herokuapp.com/api/manuals'
    }, {
      id: 'transmissions',
      group: 'Resources',
      label: 'Transmissions',
      url: 'https://evq-staging.herokuapp.com/api/transmissions'
    }, {
      id: 'principles',
      group: 'Resources',
      label: 'Principles',
      url: 'https://evq-staging.herokuapp.com/api/principles'
    }, {
      id: 'variant_types',
      group: 'Vocabulary',
      label: 'Variant Types',
      url: 'https://evq-staging.herokuapp.com/api/variant_types'
    }]}
    title='EVQ'
  />
));

export const TopMenuBar = useDragDrop(() => (
  <DataView
    items={[{
      id: 'variants',
      group: 'Text',
      label: 'Variants',
      url: 'https://evq-staging.herokuapp.com/api/variants'
    }, {
      id: 'annotations',
      group: 'Text',
      label: 'Annotations',
      url: 'https://evq-staging.herokuapp.com/api/annotations'
    }, {
      id: 'manuals',
      group: 'Resources',
      label: 'Manuals',
      url: 'https://evq-staging.herokuapp.com/api/manuals'
    }, {
      id: 'transmissions',
      group: 'Resources',
      label: 'Transmissions',
      url: 'https://evq-staging.herokuapp.com/api/transmissions'
    }, {
      id: 'principles',
      group: 'Resources',
      label: 'Principles',
      url: 'https://evq-staging.herokuapp.com/api/principles'
    }, {
      id: 'variant_types',
      group: 'Vocabulary',
      label: 'Variant Types',
      url: 'https://evq-staging.herokuapp.com/api/variant_types'
    }]}
    layout='top'
    title='EVQ'
  />
));

export const ColumnCustomization = useDragDrop(() => (
  <DataView
    items={[{
      id: 'variants',
      group: 'Text',
      label: 'Variants',
      url: 'https://evq-staging.herokuapp.com/api/variants',
      columns: [{
        name: 'id',
        label: 'ID',
        sortable: true
      }, {
        name: 'chapters.number',
        label: 'Chapter',
        resolve: (variant) => variant.chapter,
        sortable: true
      }, {
        name: 'verses.number',
        label: 'Verse',
        resolve: (variant) => variant.verse,
        sortable: true
      }, {
        name: 'arabic_with_vowels',
        label: 'Arabic',
        sortable: true
      }, {
        name: 'roman_transliteration',
        label: 'Roman',
        sortable: true
      }, {
        name: 'status',
        label: 'Status',
        sortable: true
      }, {
        name: 'variant_types',
        label: 'Type',
        resolve: (variant) => _.map(variant.variant_types_variants, (vtv) => vtv.variant_type.abbreviation),
        sortable: true
      }, {
        name: 'attachments',
        label: 'Attachments',
        resolve: (variant) => _.size(variant.attachments),
        sortable: false
      }]
    }, {
      id: 'annotations',
      group: 'Text',
      label: 'Annotations',
      url: 'https://evq-staging.herokuapp.com/api/annotations',
      columns: [{
        name: 'id',
        label: 'ID',
        sortable: true
      }, {
        name: 'variants.arabic_with_vowels',
        label: 'Arabic',
        resolve: (annotation) => annotation.variant.arabic_with_vowels,
        sortable: true
      }]
    }]}
    layout={select('Layout', ['top', 'left'], 'left')}
    title='EVQ'
  />
));

export const Sorting = useDragDrop(() => (
  <DataView
    items={[{
      id: 'variants',
      group: 'Text',
      label: 'Variants',
      url: 'https://evq-staging.herokuapp.com/api/variants',
      sorts: [{
        label: 'Chapter/Verse',
        value: 'chapter_verse'
      }],
    }, {
      id: 'annotations',
      group: 'Text',
      label: 'Annotations',
      url: 'https://evq-staging.herokuapp.com/api/annotations'
    }, {
      id: 'manuals',
      group: 'Resources',
      label: 'Manuals',
      url: 'https://evq-staging.herokuapp.com/api/manuals'
    }, {
      id: 'transmissions',
      group: 'Resources',
      label: 'Transmissions',
      url: 'https://evq-staging.herokuapp.com/api/transmissions'
    }, {
      id: 'principles',
      group: 'Resources',
      label: 'Principles',
      url: 'https://evq-staging.herokuapp.com/api/principles'
    }, {
      id: 'variant_types',
      group: 'Vocabulary',
      label: 'Variant Types',
      url: 'https://evq-staging.herokuapp.com/api/variant_types'
    }]}
    title='EVQ'
  />
));

export const DetailView = useDragDrop(() => (
  <DataView
    items={[{
      id: 'sites',
      group: 'CMS',
      label: 'Sites',
      url: 'https://admin-staging.archnet.org/api/sites'
    }, {
      id: 'authorities',
      group: 'CMS',
      label: 'Authorities',
      url: 'https://admin-staging.archnet.org/api/authorities'
    }]}
    title='EVQ'
  />
));

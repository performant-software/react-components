// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import LazyIIIF from '../../../semantic-ui/src/components/LazyIIIF';
import image from '../assets/test-image.jpg';
import manifest from '../assets/manifest.json';

export default {
  title: 'Components/Semantic UI/LazyIIIF',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <LazyIIIF
    contentType='image/jpeg'
    manifest={manifest}
  />
);

export const Preview = () => (
  <LazyIIIF
    contentType='image/jpeg'
    preview={image}
    manifest={manifest}
    src={image}
  />
);

export const StringManifest = () => {
  const testManifest = '{"@context":["http://www.w3.org/ns/anno.jsonld","http://iiif.io/api/presentation/3/context.json"],"id":"https://3f377a8a-9bf1-4ead-9b13-61a6fb15636e","type":"Manifest","items":[{"id":"https://3f377a8a-9bf1-4ead-9b13-61a6fb15636e/canvas/1","type":"Canvas","items":[{"id":"https://3f377a8a-9bf1-4ead-9b13-61a6fb15636e/canvas/1/annotation_page/1","type":"AnnotationPage","items":[{"id":"https://3f377a8a-9bf1-4ead-9b13-61a6fb15636e/canvas/1/annotation_page/1/annotation/1","type":"Annotation","motivation":"painting","body":{"id":"https://iiif.archivengine.com/iiif/3/if0uzaqf5xele57e6narij053kfe;1/full/max/0/default.jpg","type":"Image","format":"image/tiff","service":[{"id":"https://iiif.archivengine.com/iiif/3/if0uzaqf5xele57e6narij053kfe;1","type":"ImageService3","profile":"http://iiif.io/api/image/3/level2.json"}]},"target":"https://3f377a8a-9bf1-4ead-9b13-61a6fb15636e/canvas/1"}]}]}],"label":{"en":["sample_640×426 (1).jpeg"]}}';
  const url = URL.createObjectURL(new Blob([testManifest], {
    type: 'application/ld+json'
  }));

  return (
    <LazyIIIF
      contentType='image/jpeg'
      manifest={url}
    />
  );
};

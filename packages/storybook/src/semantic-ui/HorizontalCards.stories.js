// @flow

import React from 'react';
import { action } from 'storybook/actions';
import HorizontalCards from '../../../semantic-ui/src/components/HorizontalCards';
import useDragDrop from '../../../shared/src/utils/DragDrop';
import withImages from '../hooks/Images';

export default {
  title: 'Components/Semantic UI/HorizontalCards',
  component: HorizontalCards
};

export const Default = withImages((props) => (
  <HorizontalCards
    items={props.images}
    renderDescription={(item) => item.description}
    renderHeader={(item) => item.title}
    renderImage={(item) => item.image}
    renderMeta={(item) => item.subtitle}
  />
), 50);

export const DragAndDrop = useDragDrop(withImages((props) => (
  <HorizontalCards
    items={props.images}
    onDrag={(dragIndex, hoverIndex) => {
      const temp = [...props.images];
      const item = temp[dragIndex];

      temp.splice(dragIndex, 1);
      temp.splice(hoverIndex, 0, item);

      props.setImages(temp);
    }}
    renderDescription={(item) => item.description}
    renderHeader={(item) => item.title}
    renderImage={(item) => item.image}
    renderMeta={(item) => item.subtitle}
  />
), 10));

export const InlineImages = withImages((props) => (
  <HorizontalCards
    inlineImage
    items={props.images}
    renderDescription={(item) => item.description}
    renderHeader={(item) => item.title}
    renderImage={(item) => item.image}
    renderMeta={(item) => item.subtitle}
  />
), 50);

export const PerPage = withImages((props) => (
  <HorizontalCards
    items={props.images}
    perPage={4}
    renderDescription={(item) => item.description}
    renderHeader={(item) => item.title}
    renderImage={(item) => item.image}
    renderMeta={(item) => item.subtitle}
  />
), 50);

export const OnClick = withImages((props) => (
  <HorizontalCards
    items={props.images}
    onClick={action('click')}
    renderDescription={(item) => item.description}
    renderHeader={(item) => item.title}
    renderImage={(item) => item.image}
    renderMeta={(item) => item.subtitle}
  />
), 50);

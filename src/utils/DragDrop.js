// @flow

import React, { type ComponentType } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend, type BackendFactory } from 'react-dnd-html5-backend';

const useDragDrop = (WrappedComponent: ComponentType<any>, backend: BackendFactory = HTML5Backend) => (
  () => (
    <DndProvider
      backend={backend}
    >
      <WrappedComponent />
    </DndProvider>
  )
);

export default useDragDrop;

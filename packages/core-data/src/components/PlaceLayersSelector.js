// @flow

import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { CheckSquare2, Square } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import _ from 'underscore';
import OverlayLayers from './OverlayLayers';
import type { Layer as LayerType } from '../types/RuntimeConfig';

type Props = {
  /**
   * Classname to append to the root element.
   */
  className?: string | Array<string>,

  /**
   * The label to render for the selector.
   */
  label: string,

  /**
   * The layer options to render for the selector.
   */
  layers: Array<LayerType>
};

/**
 * This component renders a selector for the passed list of layers.
 */
const PlaceLayersSelector = (props: Props) => {
  const [selectedLayers, setSelectedLayers] = useState([]);

  /**
   * Returns true if the passed ID is in the collection of selected IDs.
   *
   * @type {function(*): boolean}
   */
  const isSelected = useCallback(({ name }) => _.findWhere(selectedLayers, { name }), [selectedLayers]);

  /**
   * Toggles selection for the passed ID.
   *
   * @type {(function(*): void)|*}
   */
  const onChange = useCallback((layer) => {
    if (isSelected(layer)) {
      setSelectedLayers((prevSelected) => _.filter(prevSelected, (l) => l.url !== layer.url));
    } else {
      setSelectedLayers((prevSelected) => [...prevSelected, layer]);
    }
  }, [isSelected]);

  if (_.isEmpty(props.layers)) {
    return null;
  }

  return (
    <div
      className={clsx('px-3', 'pb-2', 'pt-4', 'text-sm', 'border-t', props.className)}
    >
      <OverlayLayers
        overlays={selectedLayers}
      />
      <h2
        className='font-medium'
      >
        { props.label }
      </h2>
      <ul
        className='leading-relaxed'
      >
        { _.map(props.layers, (layer, index) => (
          <li
            className='py-1'
            key={index}
          >
            <div
              className='flex gap-1.5 items-center'
            >
              <Checkbox.Root
                className='hover:bg-transparent mb-0.5'
                id={layer.name}
                checked={isSelected(layer)}
                onCheckedChange={() => onChange(layer)}
              >
                { isSelected(layer) && (
                  <CheckSquare2
                    className='w-5 h-5'
                  />
                )}
                { !isSelected(layer) && (
                  <Square
                    className='w-5 h-5'
                  />
                )}
              </Checkbox.Root>
              <label
                className='cursor-pointer grow'
                htmlFor={layer.name}
              >
                { layer.name }
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceLayersSelector;

// @flow

import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { Check, Dot, Layers } from 'lucide-react';
import React, {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import _ from 'underscore';
import I18nContext from '../context/I18n';
import type { Layer } from '../types/RuntimeConfig';

type Props = {
  baseLayer: Layer,
  baseLayers: Array<Layer>,
  dataLayers: Array<Layer>,
  onChangeBaseLayer: (config: Layer) => void,
  onChangeOverlays: (visible: Array<string>) => void
};

const LayerMenu = (props: Props) => {
  const [selectedOverlays, setSelectedOverlays] = useState({});

  const { translations } = useContext(I18nContext);

  const {
    baseLayer,
    baseLayers,
    dataLayers
  } = props;

  /**
   * Changes the base layer to the layer with the passed name.
   *
   * @type {(function(*): void)|*}
   */
  const onChangeBaseLayer = useCallback((name) => {
    props.onChangeBaseLayer(_.findWhere(baseLayers, { name }));
  }, [baseLayers, props.onChangeBaseLayer]);

  /**
   * Toggles visibility for the overlay with the passed name.
   *
   * @type {function(string): function(boolean): void}
   */
  const onToggleOverlay = useCallback((name: string) => (
    (checked: boolean) => setSelectedOverlays((state) => ({ ...state, [name]: checked }))
  ), []);

  /**
   * Calls the onChangeOverlays prop when the selected overlays are changed.
   */
  useEffect(() => {
    const visible = Object.entries(selectedOverlays)
      .filter(([, v]) => v)
      .map(([name]) => dataLayers.find((l) => l.name === name))
      .filter(Boolean);

    props.onChangeOverlays(visible);
  }, [selectedOverlays]);

  return (
    <>
      <Dropdown.Root>
        <Dropdown.Trigger
          asChild
        >
          <button
            className='p6o-control p6o-control-btn'
            aria-label={translations.t_selectMapLayers()}
            type='button'
          >
            <Layers
              className='h-4 w-4'
            />
          </button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content
            align='start'
            className='bg-white/80 max-h-[50vh] overflow-y-auto backdrop-blur z-20 shadow-md rounded-md max-w-lg p-4 outline-none'
            side='left'
            sideOffset={10}
          >
            <Dropdown.Label
              className='w-full font-medium text-sm text-muted'
            >
              { translations.t_baseLayers() }
            </Dropdown.Label>
            <Dropdown.RadioGroup
              className='py-1.5'
              onValueChange={onChangeBaseLayer}
              value={baseLayer}
            >
              { baseLayers.map((b) => (
                <Dropdown.RadioItem
                  className='outline-none relative pl-7 pr-2 pt-0.5 rounded-md cursor-pointer hover:bg-teal-700/10'
                  key={b.name}
                  value={b.name}
                >
                  <Dropdown.ItemIndicator
                    className='absolute -left-1 -top-0.5'
                  >
                    <Dot
                      className='w-8 h-8'
                    />
                  </Dropdown.ItemIndicator>
                  { b.name }
                </Dropdown.RadioItem>
              ))}
            </Dropdown.RadioGroup>
            { dataLayers.length > 0 && (
              <>
                <Dropdown.Separator
                  className='w-full border-b pt-0.5 my-2'
                />
                <Dropdown.Label
                  className='w-full font-medium text-sm text-muted'
                >
                  { translations.t_overlays() }
                </Dropdown.Label>
                <div
                  className='pt-1.5'
                >
                  { dataLayers.map((o) => (
                    <Dropdown.CheckboxItem
                      checked={selectedOverlays[o.name]}
                      className='outline-none relative pl-7 pr-2 py-0.5 rounded-md cursor-pointer hover:bg-teal-700/10'
                      key={o.name}
                      onCheckedChange={onToggleOverlay(o.name)}
                    >
                      <Dropdown.ItemIndicator
                        className='absolute left-1 top-1.5'
                      >
                        <Check
                          className='w-4 h-4'
                        />
                      </Dropdown.ItemIndicator>
                      { o.name }
                    </Dropdown.CheckboxItem>
                  ))}
                </div>
              </>
            )}
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
};

export default LayerMenu;

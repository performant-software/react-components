// @flow

import React, { useMemo } from 'react';
import { Highlight } from 'react-instantsearch';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import _ from 'underscore';
import type { Feature } from '../types/Feature';
import type { Place } from '../types/typesense/Place';
import './PlaceResultsList.css';

/**
 * Converts the passed place result to a feature.
 *
 * @param result
 *
 * @returns {{
 *   geometry: {coordinates: number[], type: string},
 *   id: number,
 *   type:
 *   string,
 *   properties: {
 *     ccode: *[],
 *     record_id: string,
 *     names: *,
 *     name: string,
 *     id: string,
 *     title: string,
 *     type: string,
 *     uuid: string
 *   }
 * }}
 */
const toFeature = (result: Place) => ({
  id: parseInt(result.record_id, 10),
  type: 'Feature',
  properties: {
    id: result.record_id,
    ccode: [],
    title: result.name,
    uuid: result.uuid,
    record_id: result.record_id,
    name: result.name,
    names: _.map(result.names, (toponym) => ({ toponym })),
    type: result.type
  },
  geometry: {
    type: 'Point',
    coordinates: result.coordinates.slice().reverse()
  }
});

type HitComponentProps = {
  hit: any,
  isHovered: boolean,
  onClick: () => void
};

const HitComponent = (props: HitComponentProps) => {
  const { hit } = props;

  const className = useMemo(() => {
    const classNames = [
      'h-[5.5em]',
      'border-b',
      'flex',
      'flex-col',
      'justify-start'
    ];

    if (props.isHovered) {
      classNames.add('bg-teal-700/30');
    }

    return classNames.join(' ');
  }, [props.isHovered]);

  return (
    <div
      className={className}
    >
      <button
        className='py-2 px-3 flex-grow text-left inline-flex flex-col'
        onClick={props.onClick}
        type='button'
      >
        <Highlight
          attribute='name'
          className='line-clamp-2'
          hit={hit}
        />
        <p
          className='text-muted text-xs line-clamp-1'
        >
          <Highlight
            hit={hit}
            attribute='names'
          />
        </p>
      </button>
    </div>
  );
};

type Props = {
  /**
   * An array of search results representing `/typesense/Place` objects.
   */
  hits: Array<Place>,

  /**
   * The object that is currently occupying the hover state.
   */
  hover?: Feature<{ id: string }>,

  /**
   * Callback fired when the hover item is changed.
   */
  onHoverChange: (hover?: Feature<{ id: string }>) => void,

  /**
   * Callback fired when a search result is clicked.
   */
  onClick: (result: Place) => void
};

type RowProps = {
  index: number,
  style: any
};

/**
 * This component renders a list of search results returned from a Core Data Typesense index.
 */
const PlaceResultsList = (props: Props) => {
  const {
    hits,
    hover,
    onClick,
    onHoverChange
  } = props;

  const Row = ({ index, style }: RowProps) => {
    const hit = hits[index];
    const id = parseInt(hit.record_id, 10);

    return (
      <div
        style={style}
        onPointerEnter={() => onHoverChange(hover?.id === id ? hover : toFeature(hit))}
        onPointerLeave={() => onHoverChange(undefined)}
      >
        <HitComponent
          hit={hit}
          isHovered={hover?.id === parseInt(hit?.record_id, 10)}
          onClick={() => onClick(hit)}
        />
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          height={height}
          itemCount={hits.length}
          width={width}
          itemSize={88}
        >
          { Row }
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};

export default PlaceResultsList;

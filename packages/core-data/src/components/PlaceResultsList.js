// @flow

import React, { useMemo } from 'react';
import { Highlight } from 'react-instantsearch';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import type { Feature } from '../types/Feature';
import type { Place } from '../types/typesense/Place';
import TypesenseUtils from '../utils/Typesense';

type HitComponentProps = {
  hit: any,
  isHovered: boolean,
  onClick: () => void
};

const HitComponent = (props: HitComponentProps) => {
  const { hit } = props;

  const className = useMemo(() => {
    const classNames = [
      'h-full',
      'border-b',
      'flex',
      'flex-col',
      'justify-start'
    ];

    if (props.isHovered) {
      classNames.push('bg-teal-700/30');
    }

    return classNames.join(' ');
  }, [props.isHovered]);

  return (
    <div
      className={className}
    >
      <button
        aria-label='Search result'
        className='py-2 px-3 flex-grow text-left flex rounded-none flex-col hover:bg-transparent'
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
        onPointerEnter={() => onHoverChange(hover?.id === id ? hover : TypesenseUtils.toFeature(hit))}
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

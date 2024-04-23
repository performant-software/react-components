// @flow

import React, { useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import type { Feature } from '../types/Feature';
import type { Place } from '../types/typesense/Place';
import TypesenseUtils from '../utils/Typesense';

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
   * The height (in pixels) of each row in the list.
   */
  itemSize?: number,

  /**
   * Callback fired when the hover item is changed.
   */
  onHoverChange: (hover?: Feature<{ id: string }>) => void,

  /**
   * Callback fired when a search result is clicked.
   */
  onClick: (result: Place) => void,

  /**
   * TODO: Comment me
   * @param result
   */
  renderItem: (result: Place) => JSX.Element
};

type RowProps = {
  index: number,
  style: any
};

/**
 * This component renders a list of search results returned from a Core Data Typesense index.
 */
const SearchResultsList = (props: Props) => {
  const {
    hits,
    hover,
    onClick,
    onHoverChange,
    renderItem
  } = props;

  const Row = ({ index, style }: RowProps) => {
    const hit = hits[index];
    const id = parseInt(hit.record_id, 10);

    /**
     * Sets the isHovered variable to `true` for the current row.
     *
     * @type {boolean}
     */
    const isHovered = useMemo(() => hover?.id === id, [hover, id]);

    /**
     * Sets the class name variable for the current row.
     *
     * @type {string}
     */
    const className = useMemo(() => {
      const classNames = [
        'h-full',
        'border-b',
        'flex',
        'flex-col',
        'justify-start'
      ];

      if (isHovered) {
        classNames.push('bg-teal-700/30');
      }

      return classNames.join(' ');
    }, [isHovered]);

    return (
      <div
        style={style}
        onPointerEnter={() => onHoverChange(isHovered ? hover : TypesenseUtils.toFeature(hit))}
        onPointerLeave={() => onHoverChange(undefined)}
      >
        <div
          className={className}
        >
          <button
            aria-label='Search result'
            className='py-2 px-3 flex-grow text-left flex rounded-none flex-col hover:bg-transparent'
            onClick={onClick}
            type='button'
          >
            { renderItem(hit) }
          </button>
        </div>
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
          itemSize={props.itemSize}
        >
          { Row }
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};

SearchResultsList.defaultProps = {
  itemSize: 88
};

export default SearchResultsList;

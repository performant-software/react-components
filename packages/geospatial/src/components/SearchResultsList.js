// @flow

import React from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { Feature } from '@peripleo/peripleo';
import { Highlight } from 'react-instantsearch';
import { TypeSenseSearchResult } from './CoreDataTypes';

import './SearchResultsList.css';

const toFeature = (result: TypeSenseSearchResult) => ({
  id: parseInt(result.record_id),
  type: 'Feature',
  properties: {
    id: result.record_id,
    ccode: [],
    title: result.name,
    uuid: result.uuid,     
    record_id: result.record_id,
    name: result.name,
    names: result.names.map(toponym => ({ toponym })),
    type: result.type
  },
  geometry: {
    type: 'Point',
    coordinates: result.coordinates.slice().reverse()
  }
});

interface HitComponentProps {

  hit: any;

  isHovered: boolean;

  onClick(): void;

}

const HitComponent = (props: HitComponentProps) => {

  const { hit } = props;

  const cls = "h-[5.5em] border-b flex flex-col justify-start";

  return (
    <div 
      className={props.isHovered ? `bg-teal-700/30 ${cls}` : cls}>
      <button 
        className="py-2 px-3 flex-grow text-left inline-flex flex-col"
        onClick={props.onClick}>
        <Highlight hit={hit} attribute="name" className="line-clamp-2" />
        <p className="text-muted text-xs line-clamp-1">
          <Highlight hit={hit} attribute={"names"} />
        </p>
      </button>
    </div>
  );
}

export interface SearchResultListProps {

  hits: TypeSenseSearchResult[];

  hover?: Feature<{ id: string }>;

  onHoverChange(hover?: Feature<{ id: string }>): void;  

  onClick(result: TypeSenseSearchResult): void;

}

export const SearchResultsList = (props: SearchResultListProps) => {

  const { hits, hover, onHoverChange } = props;

  const Row = ({ index, style}) => {
    const hit = hits[index];
    const id = parseInt(hit.record_id);
    
    return (
      <div 
        style={style} 
        onPointerEnter={() => onHoverChange(hover?.id === id ? hover : toFeature(hit))}
        onPointerLeave={() => onHoverChange(undefined)}>
        <HitComponent 
          hit={hit} 
          isHovered={hover?.id === parseInt(hit?.record_id)} 
          onClick={() => props.onClick(hit)} />
      </div>
    )
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          height={height}
          itemCount={hits.length}
          width={width}
          itemSize={88}>
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>
  )
  
}
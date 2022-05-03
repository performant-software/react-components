// @flow

import React, {
  useEffect,
  useState,
  type Element,
  type Node
} from 'react';
import {
  Dimmer,
  Header,
  Image,
  Loader,
  Pagination,
  Segment,
  Transition
} from 'semantic-ui-react';
import _ from 'underscore';
import './MasonryGrid.css';

type Item = {
  alt: string,
  extra?: Element<any> | string,
  id: number,
  image: string,
  subtitle?: string,
  title?: string,
};

type LayoutProps = {
  children: Array<Node>,
  columns: number,
  gap: number
};

const MasonryLayout = (props: LayoutProps) => {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < props.columns; i += 1) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < props.children.length; i += 1) {
    const columnIndex = i % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      <div
        className='itemContainer'
        key={i}
        style={{
          marginBottom: `${props.gap}px`
        }}
      >
        { props.children[i] }
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < props.columns; i += 1) {
    result.push(
      <div
        className='column'
        key={i}
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`
        }}
      >
        { columnWrapper[`column${i}`] }
      </div>
    );
  }

  return (
    <div
      className='masonryGrid'
    >
      { result }
    </div>
  );
};

type TileProps = {
  item: Item,
  onClick?: (item: any) => void,
  renderContent?: (item: Item) => Node
};

const HEIGHT_OFFSET = 350;
const MIN_HEIGHT = 175;

const MasonryTile = (props: TileProps) => {
  const [dimmerActive, setDimmerActive] = useState(false);
  const [height, setHeight] = useState(0);

  /**
   * Calculate the height of the tile once the component mounts.
   */
  useEffect(() => {
    setHeight(MIN_HEIGHT + Math.ceil(Math.random() * HEIGHT_OFFSET));
  }, []);

  return (
    <Dimmer.Dimmable
      className='item'
      dimmed={dimmerActive}
      onClick={() => props.onClick && props.onClick(props.item)}
      onMouseEnter={() => setDimmerActive(true)}
      onMouseLeave={() => setDimmerActive(false)}
      style={{
        cursor: props.onClick ? 'pointer' : undefined,
        height: `${height}px`
      }}
    >
      <Transition
        duration={800}
        visible={dimmerActive}
      >
        <Dimmer.Inner
          active={dimmerActive}
        >
          <Header
            content={props.item.title}
            inverted
            subheader={props.item.subtitle}
          />
          { props.item.extra && (
            <div
              className='extraContainer'
            >
              { props.item.extra }
            </div>
          )}
        </Dimmer.Inner>
      </Transition>
      <Image
        alt={props.item.alt}
        className='image'
        src={props.item.image}
      />
      { props.renderContent && props.renderContent(props.item) }
    </Dimmer.Dimmable>
  );
};

type Props = {
  columns: number,
  gap: number,
  items: Array<Item>,
  loading?: boolean,
  onClick?: (item: any) => void,
  onPageChange?: (page: number) => void,
  page: number,
  pages: number,
  renderContent?: (item: Item) => Node,
  renderEmpty?: () => Node
};

const MasonryGrid = (props: Props) => (
  <div
    className='masonry-grid'
  >
    <Loader
      active={props.loading}
    />
    <div>
      <MasonryLayout
        columns={props.columns}
        gap={props.gap}
      >
        { _.map(props.items, (item, index) => (
          <MasonryTile
            key={index}
            item={item}
            onClick={props.onClick}
            renderContent={props.renderContent}
          />
        ))}
      </MasonryLayout>
      { props.pages > 1 && props.onPageChange && (
        <Segment
          basic
          textAlign='center'
        >
          <Pagination
            activePage={props.page}
            firstItem={null}
            lastItem={null}
            onPageChange={(e, { activePage }) => props.onPageChange && props.onPageChange(activePage)}
            totalPages={props.pages}
            size='small'
          />
        </Segment>
      )}
    </div>
    { !props.loading && !(props.items && props.items.length) && props.renderEmpty && props.renderEmpty() }
  </div>
);

export default MasonryGrid;

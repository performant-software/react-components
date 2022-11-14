// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import _ from 'underscore';
import {
  Button,
  Card,
  Header,
  Image,
  Ref
} from 'semantic-ui-react';
import Draggable from './Draggable';
import './HorizontalCards.css';

type Props = {
  inlineImage?: boolean,
  items: Array<any>,
  onClick?: (item: any, index: number) => void,
  onDrag?: (dragIndex: number, hoverIndex: number) => void,
  perPage: number,
  renderDescription?: (item: any) => Element<any> | string,
  renderExtra?: (item: any) => Element<any> | string,
  renderHeader?: (item: any) => Element<any> | string,
  renderImage: (item: any) => string,
  renderMeta?: (item: any) => Element<any> | string,
};

const HorizontalCards = (props: Props) => {
  const [marginWidth, setMarginWidth] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [scrollPage, setScrollPage] = useState(0);
  const [scrollPages, setScrollPages] = useState(0);

  const ref = useRef();

  /**
   * Sets the flex-box style based on the page width.
   *
   * @type {function(): {flex: string}}
   */
  const cardStyle = useMemo(() => ({
    flex: `0 0 ${(pageWidth / props.perPage) - marginWidth}px`
  }), [pageWidth, marginWidth, props.perPage]);

  /**
   * Initializes the page width and scroll pages on the sate.
   *
   * @type {(function(*=): void)|*}
   */
  const initialize = useCallback((event) => {
    const instance = ref.current;

    if (instance) {
      const { clientWidth, scrollWidth } = instance;

      setPageWidth(clientWidth);
      setScrollPages(Math.ceil(scrollWidth / clientWidth));

      if (!event) {
        setScrollPage(0);
      }

      const child = instance.firstChild;
      if (child) {
        const style = window.getComputedStyle(child);
        const leftMargin = parseFloat(style.marginLeft) || 0;
        const rightMargin = parseFloat(style.marginRight) || 0;

        setMarginWidth(leftMargin + rightMargin);
      }
    }
  }, [ref, props.items]);

  /**
   * Sets the current page number on the state.
   *
   * @type {function(*): void}
   */
  const onPageChange = useCallback((increment) => {
    let nextPage = scrollPage + increment;

    if (nextPage < 0) {
      nextPage = scrollPages;
    } else if (nextPage >= scrollPages) {
      nextPage = 0;
    }

    setScrollPage(nextPage);
  }, [scrollPage, scrollPages]);

  /**
   * Sets the window resize event listener.
   */
  useEffect(() => {
    window.addEventListener('resize', initialize);

    return () => window.removeEventListener('resize', initialize);
  }, []);

  /**
   * Re-initialize the component if the items change.
   */
  useEffect(() => initialize(), [initialize, props.items]);

  /**
   * Sets the total number of pages on the state.
   */
  useEffect(() => {
    const instance = ref.current;

    if (instance) {
      const { scrollWidth } = instance;
      setScrollPages(Math.ceil(scrollWidth / pageWidth));
    }
  }, [pageWidth]);

  /**
   * Scrolls to the new position once the page changes.
   */
  useEffect(() => {
    const instance = ref.current;

    if (instance) {
      instance.scrollTo({ left: (scrollPage * pageWidth), behavior: 'smooth' });
    }
  }, [scrollPage, pageWidth]);

  /**
   * Renders the card component. If a "route" prop is passed, the component is wrapped in a Link.
   *
   * @param item
   * @param index
   *
   * @returns {JSX.Element}
   */
  const renderCard = (item, index) => {
    let card = (
      <Card
        link
        onClick={props.onClick && props.onClick.bind(this, item, index)}
        style={cardStyle}
      >
        { !props.inlineImage && renderImage(item) }
        { (props.renderHeader || props.renderMeta || props.renderDescription) && (
          <Card.Content>
            { props.inlineImage && renderImage(item) }
            { props.renderHeader && (
              <Card.Header
                as={Header}
                size='small'
              >
                { props.renderHeader(item) }
              </Card.Header>
            )}
            { props.renderMeta && (
              <Card.Meta>
                { props.renderMeta(item) }
              </Card.Meta>
            )}
            { props.renderDescription && (
              <Card.Description>
                { props.renderDescription(item) }
              </Card.Description>
            )}
          </Card.Content>
        )}
        { props.renderExtra && (
          <Card.Content
            extra
          >
            { props.renderExtra(item) }
          </Card.Content>
        )}
      </Card>
    );

    if (props.onDrag) {
      // Since the item may not be saved yet, we'll look for the ID or UID columns as the key. This is necessary to
      // maintain the correct element when dragging.
      const key = item.id || item.uid;

      card = (
        <Draggable
          direction='horizontal'
          id={key}
          index={index}
          item={item}
          key={key}
          onDrag={props.onDrag}
        >
          { card }
        </Draggable>
      );
    }

    return card;
  };

  /**
   * Renders the image based on the return type of the renderImage prop. String values returned will be assumed to be
   * a src attribute for the image.
   *
   * @type {(function(*=): (*))|*}
   */
  const renderImage = useCallback((item) => {
    const image = props.renderImage(item);

    if (_.isString(image) || !image) {
      return (
        <Image
          alt={item.alt}
          className='image-placeholder'
          src={image}
          style={{
            objectFit: 'cover'
          }}
        />
      );
    }

    return image;
  }, [props.renderImage]);

  return (
    <div
      className='horizontal-cards'
    >
      <Ref
        innerRef={ref}
      >
        <Card.Group>
          { _.map(props.items, renderCard.bind(this)) }
        </Card.Group>
      </Ref>
      <div
        className='button-container'
      >
        { scrollPages > 1 && (
          <div
            className='pagination'
          >
            <Button
              aria-label='Left'
              basic
              circular
              icon='angle left'
              onClick={onPageChange.bind(this, -1)}
            />
            <Button
              aria-label='Right'
              basic
              circular
              icon='angle right'
              onClick={onPageChange.bind(this, 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

HorizontalCards.defaultProps = {
  perPage: 4
};

export default HorizontalCards;

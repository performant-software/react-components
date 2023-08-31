// @flow

import React, { useCallback, useMemo, type ComponentType } from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import _ from 'underscore';
import BreadcrumbItem from './BreadcrumbItem';
import './Breadcrumbs.css';

const URL_DELIMITER = '/';

type Props = {
  /**
   * Alternate component to use to render the breadcrumb.
   */
  as?: ComponentType<any>,

  /**
   * A key-value pair of types to labels to match the `pathname`.
   */
  labels: { key: string, value: string },

  /**
   * Callback fired to lookup the name of the passed breadcrumb item.
   */
  onLoad: (id: number, name: string) => Promise<any>,

  /**
   * The URL for which to generate the breadcrumb.
   */
  pathname: string
};

/**
 * This component can be used to render a breadcrumb for the passed URL.
 */
const Breadcrumbs: ComponentType<any> = (props: Props) => {
  /**
   * Returns true if the passed string contains only digits.
   *
   * @type {function(*): boolean}
   */
  const isNumeric = useCallback((str: string) => /^\d+$/.test(str), []);

  /**
   * Sets the items to display based on the URL path.
   *
   * @type {[]}
   */
  const items = useMemo(() => {
    const value = [];

    const path = props.pathname.split(URL_DELIMITER).splice(1);

    for (let i = 0; i < path.length; i += 1) {
      const key = path[i];
      const id = path[i + 1];
      const url = path.slice(0, i + 1).join(URL_DELIMITER);

      /*
       * If the item in the path is non-numeric, we'll add it as the item label.
       * If the next item is numeric, we'll add it as the ID.
       * If the next item is non-numeric, it'll be added as a separate label on the next iteration.
       */
      if (!isNumeric(key)) {
        const item = { key, url, id: undefined };

        if (isNumeric(id)) {
          item.id = id;
        }

        value.push(item);
      }
    }

    return value;
  }, [props.pathname]);

  /**
   * Returns true if there are more items to display.
   *
   * @type {function(*): boolean}
   */
  const hasMore = useCallback((index: number) => index < (items.length - 1), [items]);

  return (
    <Breadcrumb
      size='large'
    >
      { _.map(items, (item, index) => (
        <>
          <BreadcrumbItem
            active={!hasMore(index)}
            as={props.as}
            id={item.id}
            label={props.labels[item.key]}
            name={item.key}
            onLoad={props.onLoad}
            url={item.url}
          />
          { hasMore(index) && (
            <Breadcrumb.Divider
              icon='right chevron'
            />
          )}
        </>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

// @flow

import React, { useEffect, useState, type ComponentType } from 'react';
import { Breadcrumb, Loader } from 'semantic-ui-react';

type Props = {
  active: boolean,
  as?: ComponentType<any>,
  id?: number,
  label?: string,
  name: string,
  onLoad: (id: number, name: string) => Promise<any>,
  url: string
};

const BreadcrumbItem: ComponentType<any> = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);

  /**
   * Sets or clears the name attribute on the state.
   */
  useEffect(() => {
    if (props.id) {
      props
        .onLoad(props.id, props.name)
        .then((n) => setName(n))
        .finally(() => setLoading(false));

      setLoading(true);
    } else {
      setName(null);
    }
  }, [props.id, props.name]);

  return (
    <>
      <Breadcrumb.Section
        active={props.active && !props.id}
        as={props.as}
        to={`/${props.url}`}
      >
        { props.label }
      </Breadcrumb.Section>
      { props.id && (
        <Breadcrumb.Divider
          icon='right chevron'
        />
      )}
      { loading && (
        <Loader
          active
          inline
        />
      )}
      { name && props.id && (
        <Breadcrumb.Section
          active={props.active}
          as={props.as}
          to={`/${props.url}/${props.id}`}
        >
          { name }
        </Breadcrumb.Section>
      )}
    </>
  );
};

export default BreadcrumbItem;

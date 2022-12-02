// @flow

import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import _ from 'underscore';
import CitationStyles from '../resources/CitationStyles.json';

const useCitationStyles = (defaultValue) => {
  const [name, setName] = useState();
  const [stylesCache, setStylesCache] = useState({});
  const [title, setTitle] = useState();
  const [xml, setXml] = useState();

  /**
   * Build the list of available style options.
   *
   * @type {{}}
   */
  const styles = useMemo(() => CitationStyles.coreCitationStyles, []);

  const onStyleChange = useCallback((value: string) => {
    const style = _.findWhere(styles, { name: value });
    setName(value);
    setTitle(style?.title);
  }, [styles]);

  useEffect(() => {
    if (!name) {
      let defaultStyle;

      if (defaultValue) {
        defaultStyle = _.findWhere(styles, { name: defaultValue });
      } else {
        defaultStyle = _.findWhere(styles, { isDefault: true });
      }

      onStyleChange(defaultStyle?.name);
    }
  }, [styles, defaultValue]);

  useEffect(() => {
    if (name) {
      if (_.has(stylesCache, name)) {
        setXml(stylesCache[name]);
      } else {
        fetch(`https://www.zotero.org/styles/${name}`)
          .then((response) => response.text())
          .then((data) => {
            setXml(data);
            setStylesCache((prevCache) => ({
              ...prevCache,
              [name]: data
            }));
          });
      }
    }
  }, [name, stylesCache]);

  return {
    onStyleChange,
    style: {
      name,
      title,
      xml
    },
    styles
  };
};

export default useCitationStyles;

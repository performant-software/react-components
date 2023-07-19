// @flow

import React, { useState } from 'react';
import BibliographySearchInput from '../../../semantic-ui/src/components/BibliographySearchInput';
import ZoteroTranslateContext from '../../../semantic-ui/src/context/ZoteroTranslateContext';

export default {
  title: 'Components/Semantic UI/BibliographySearchInput',
  component: BibliographySearchInput
};

export const Default = () => {
  const [items, setItems] = useState();

  return (
    <ZoteroTranslateContext.Provider
      value={{
        translateUrl: '/translate'
      }}
    >
      <BibliographySearchInput
        onError={() => {}}
        onFind={(i) => setItems(i)}
      />
      { items && (
        <div>
          <p>Results:</p>
          <pre>
            <code>
              { JSON.stringify(items, null, 4) }
            </code>
          </pre>
        </div>
      )}
    </ZoteroTranslateContext.Provider>
  );
};

// @flow

import React, { useCallback, useState } from 'react';
import _ from 'underscore';
import TreeGraph from '../../../visualize/src/components/TreeGraph';

export default {
  title: 'Components/Visualize/TreeGraph',
  component: TreeGraph
};

const data = {
  name: 'A',
  isExpanded: true,
  children: [
    {
      name: 'ABCD EFGHI JKLMNO PQRS',
      children: [{
        name: 'A1'
      }, {
        name: 'A2'
      }, {
        name: 'A3'
      }, {
        name: 'C',
        children: [{
          name: 'C1'
        }, {
          name: 'D',
          children: [{
            name: 'D1'
          }, {
            name: 'D2'
          }, {
            name: 'D3'
          }]
        }]
      }]
    },
    {
      name: 'Z'
    }, {
      name: 'B',
      children: [{
        name: 'B1'
      }, {
        name: 'B2'
      }, {
        name: 'B3'
      }]
    }
  ]
};

export const Default = () => {
  const [items, setItems] = useState(data);

  const { clientHeight: height, clientWidth: width } = document.body;

  const updateNode = useCallback((node, item) => {
    let updated;

    if (item.name === node.name) {
      updated = ({
        ...item,
        ...node,
        isExpanded: !node.isExpanded
      });
    } else {
      updated = ({
        ...item,
        children: _.map(item.children, (child) => updateNode(node, child))
      });
    }

    return updated;
  }, []);

  return (
    <div
      style={{
        height,
        width
      }}
    >
      <TreeGraph
        data={items}
        renderNode={(node) => (
          <button
            onClick={() => setItems(updateNode(node, items))}
            style={{
              backgroundColor: '#FFF',
              border: '1px solid black',
              cursor: 'pointer',
              padding: '10px',
              width: 'fit-content'
            }}
            type='button'
          >
            { node.name }
          </button>
        )}
      />
    </div>
  );
};

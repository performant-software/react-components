// @flow

import React, { useEffect, useState } from 'react';
import RecordDetailPanel from '../../../core-data/src/components/RecordDetailPanel';

export default {
  title: 'Components/Core Data/RecordDetailPanel',
  component: RecordDetailPanel
};

const sampleData = [
  {
    title: 'Related People',
    items: [
      {
        name: 'Kazuya Miyuki'
      },
      {
        name: 'Eijun Sawamura'
      }
    ],
    icon: 'person',
    count: true
  },
  {
    title: 'Related Organizations',
    items: [
      {
        name: 'Seido High School Baseball Club'
      },
      {
        name: 'Yakushi High School Baseball Club'
      }
    ],
    icon: 'occupation',
    count: true
  }
];

export const Default = () => (
  <RecordDetailPanel
    relations={sampleData}
    title='West Tokyo Qualifiers Quarterfinal'
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>
);

export const WithViewDetail = () => (
  <RecordDetailPanel
    relations={sampleData}
    detailPageUrl='#'
    title='West Tokyo Qualifiers Quarterfinal'
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>
);

export const WithIcon = () => (
  <RecordDetailPanel
    relations={sampleData}
    title='West Tokyo Qualifiers Quarterfinal'
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
    icon='participants'
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>
);

export const WithClose = () => (
  <RecordDetailPanel
    relations={sampleData}
    title='West Tokyo Qualifiers Quarterfinal'
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
    onClose={() => { alert('Closed!'); }}
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>
);

export const WithBreadcrumbs = () => (
  <RecordDetailPanel
    relations={sampleData}
    title='West Tokyo Qualifiers Quarterfinal'
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
    breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']}
    onGoBack={() => { alert('Go back!'); }}
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>
);

export const FixedWidthAndHeight = () => (
  <RecordDetailPanel
    relations={sampleData}
    title='West Tokyo Qualifiers Quarterfinal'
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
    breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']}
    onGoBack={() => { alert('Go back!'); }}
    classNames={{
      root: 'w-[380px] h-[560px]'
    }}
    onClose={() => { alert('Close!'); }}
    detailPageUrl='#'
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
      Lorem ipsum odor amet, consectetuer adipiscing elit.
      Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu.
      Platea taciti ridiculus nostra feugiat hac elit quisque.
      Magnis risus natoque sagittis finibus ridiculus aenean ac posuere.
      Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna.
      Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin;
      arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis.
      Praesent habitant volutpat efficitur in lacus lacinia torquent.
      Cras ultricies mus ante et dapibus dolor vivamus nunc.
      Velit interdum litora lobortis ultrices sollicitudin molestie ut.
    </p>
  </RecordDetailPanel>
);

export const WithCounts = () => (
  <RecordDetailPanel
    relations={sampleData}
    title='West Tokyo Qualifiers Quarterfinal'
    count
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>
);

export const UnmountOnClose = () => {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setContent(
        <p>
          Arcu imperdiet sit sit viverra id volutpat commodo.
          {' '}
          <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
          {' '}
          Nibh aenean vitae blandit vitae sapien ac varius mattis.
          Aliquam vitae purus arcu eros enim tempus parturient orci fames.
          Lorem ipsum odor amet, consectetuer adipiscing elit.
          Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu.
          Platea taciti ridiculus nostra feugiat hac elit quisque.
          Magnis risus natoque sagittis finibus ridiculus aenean ac posuere.
          Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna.
          Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin;
          arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis.
          Praesent habitant volutpat efficitur in lacus lacinia torquent.
          Cras ultricies mus ante et dapibus dolor vivamus nunc.
          Velit interdum litora lobortis ultrices sollicitudin molestie ut.
        </p>
      );
    }, 200);
  }, []);

  return show && (
  <RecordDetailPanel
    relations={sampleData}
    title='West Tokyo Qualifiers Quarterfinal'
    detailItems={[
      {
        text: 'July 27',
        icon: 'date'
      },
      {
        text: 'Meiji Jinju Stadium',
        icon: 'location'
      }
    ]}
    breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']}
    onGoBack={() => { alert('Go back!'); }}
    classNames={{
      root: 'w-[380px] h-[560px]'
    }}
    onClose={() => { setShow(false); }}
    detailPageUrl='#'
  >
    { content }
  </RecordDetailPanel>
  );
};

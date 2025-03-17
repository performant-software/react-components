// @flow

import React, { useEffect, useState } from 'react';
import RecordDetailPanel from '../../../core-data/src/components/RecordDetailPanel';
import { KeyValueList } from '@performant-software/core-data';
import { action } from '@storybook/addon-actions';

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
    onClose={action('close')}
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
    onGoBack={action('back')}
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
    onGoBack={action('back')}
    classNames={{
      root: 'w-[380px] h-[560px]'
    }}
    onClose={action('close')}
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
    onGoBack={action('back')}
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

export const NoRelatedRecords = () => (
  <RecordDetailPanel
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

export const WithLoadingDelay = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <RecordDetailPanel
      loading={loading}
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
};

export const Test = () => (
  <RecordDetailPanel
    classNames={{
      root: 'w-[380px] h-[560px]'
    }}
    detailPageUrl='#'
    icon='location'
    onClose={action('close')}
    relations={[{
      title: 'Planification evenement new',
      items: [{
        name: 'Planification Salton City'
      }]
    }, {
      title: 'Pays',
      items: [{
        name: 'États-Unis (Californie)'
      }]
    }]}
    title='Saltaire'
  >
    <KeyValueList
      items={[{
        label: 'Serial Number',
        value: '1976'
      }, {
        label: 'Periode Planification',
        value: '1851-1853'
      }, {
        label: 'Annee Planification',
        value: '1851'
      }, {
        label: 'Autre Nom Ou Localisation',
        value: '(près de Bradford)'
      }, {
        label: 'Autres informations 1',
        value: 'Site du patrimoine mondial.'
      }, {
        label: 'Autres informations 2',
        value: '"Saltaire was built by Titus Salt to replace his woolen mills in Bradford by a single large factory and a new town for the work force. He selected a greenfield site crossed by a canal and railway, and between 1851 and 1871 completed a model industrial town of 820 dwellings and a population of 4,389. The town was endowed with a variety of community buildings and parks, and although the residentiel density of thirty-two houses (170 persons) per acre (eighty houses or 420 persons per hectare) appears crowded by today\'s standards, it represented a marked improvement on working-class living conditions of the time" (source: Pacione, Michael. 2009. Urban geography: a global perspective. Taylor & Francis. (à la page 166)).'
      }]}
    />
    <p
      className='text-sm py-4'
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla, sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque. Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci viverra elementum eu eu velit.
      <br />
      <br />
      Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis, scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus tempus.
      <br />
      <br />
      Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et, imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis, porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.
      <br />
      <br />
      Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.
      <br />
      <br />
      Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros.
    </p>
  </RecordDetailPanel>
);

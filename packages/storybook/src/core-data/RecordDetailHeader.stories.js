// @flow

import React from 'react';
import RecordDetailHeader from '../../../core-data/src/components/RecordDetailHeader';

export default {
  title: 'Components/Core Data/RecordDetailHeader',
  component: RecordDetailHeader
};

export const Default = () => (
  <RecordDetailHeader
    title='A Very Serious and Important Event'
    detailItems={[
      {
        text: 'March 11, 1986',
        icon: 'date'
      },
      {
        text: 'Princton, NJ',
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
  </RecordDetailHeader>
);

export const WithLink = () => (
  <RecordDetailHeader
    title='A Very Serious and Important Event'
    detailItems={[
      {
        text: 'March 11, 1986',
        icon: 'date'
      },
      {
        text: 'Princton, NJ',
        icon: 'location'
      }
    ]}
    detailPageUrl='#'
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailHeader>
);

export const NarrowWidth = () => (
  <RecordDetailHeader
    title='A Very Serious and Important Event'
    detailItems={[
      {
        text: 'March 11, 1986',
        icon: 'date'
      },
      {
        text: 'Princton, NJ',
        icon: 'location'
      }
    ]}
    classNames={{
      root: 'w-[380px]'
    }}
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
      Dapibus taciti phasellus pulvinar ut ac nascetur tortor.
      Inceptos viverra fames donec eu imperdiet. Tempus parturient justo curae parturient arcu.
      Risus molestie lobortis, hendrerit consectetur curae eros.
    </p>
    <p>
      Per orci torquent, nascetur tellus diam arcu pulvinar.
      Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna.
      Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin;
      arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis.
      Praesent habitant volutpat efficitur in lacus lacinia torquent.
      Cras ultricies mus ante et dapibus dolor vivamus nunc.
      Velit interdum litora lobortis ultrices sollicitudin molestie ut.
      Fusce per est; ullamcorper montes pellentesque purus.
      Ullamcorper mauris fermentum cursus sollicitudin ex id conubia dui nisi.
    </p>
  </RecordDetailHeader>
);

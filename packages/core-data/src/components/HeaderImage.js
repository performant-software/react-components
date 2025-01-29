// @flow

import React from 'react';
import { Image } from 'lucide-react';

type Props = {
  alt?: string,
  src: string
};

const HeaderImage = (props: Props) => (
  <div
    className='relative w-full h-[200px] flex-grow-0 flex-shrink-0 bg-muted/20 z-0'
  >
    <div
      className='absolute top-0 left-0 w-full h-full flex justify-center items-center'
    >
      <Image
        className='h-20 w-20 text-gray-400'
        strokeWidth={1}
      />
    </div>
    <div
      className='absolute top-0 left-0 w-full h-full flex justify-center items-center'
    >
      <img
        alt={props.alt}
        className='object-cover h-full w-full'
        src={props.src}
      />
    </div>
  </div>
);

export default HeaderImage;

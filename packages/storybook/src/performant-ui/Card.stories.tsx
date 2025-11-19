import React from 'react';
import Card from '../../../performant-ui/src/components/Card';
import fc from '../assets/faircopy_image.png';

export default {
  title: 'Components/Performant UI/Card',
  component: Card
};

export const Default = () => {
  return (
    <Card>
      <Card.Section>
        section 1
      </Card.Section>
      <Card.Section>
        section 2
      </Card.Section>
    </Card>
  );
};

export const WithCover = () => (
  <Card className='w-[300px]'>
    <Card.Section
      padded={false}
    >
      <img className='object-cover' src={fc} />
    </Card.Section>
    <Card.Section>
      section 2
    </Card.Section>
  </Card>
);

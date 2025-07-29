import React, { useState } from 'react';
import Card from '../../../tailwind-ui/src/components/Card';
import { MdLocationOn } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";

export default {
  title: 'Components/TailwindUI/Card',
  component: Card
};

export const Default = () => {
  return (
    <Card>
      <Card.Top>
        hi
      </Card.Top>
      <Card.Middle>
        hi 2
      </Card.Middle>
      <Card.Bottom>
        hi 3
      </Card.Bottom>
    </Card>
  )
}

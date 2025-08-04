import React from 'react';
import Dropdown from '../../../tailwind-ui/src/components/Dropdown';
import { FaPersonBooth } from 'react-icons/fa';
import { MdEditDocument, MdSettings } from 'react-icons/md';

export default {
  title: 'Components/TailwindUI/Dropdown',
  component: Dropdown
};

export const Default = () => {
  return (
    <Dropdown>
      <Dropdown.Button>
        Explore
      </Dropdown.Button>
      <Dropdown.Item
        label='People'
      />
      <Dropdown.Item
        label='Documents'
      />
      <Dropdown.Divider />
      <Dropdown.Item
        label='Settings'
      />
    </Dropdown>
  );
};

export const Icons = () => {
  return (
    <Dropdown>
      <Dropdown.Button>
        Explore
      </Dropdown.Button>
      <Dropdown.Item
        icon={FaPersonBooth}
        label='People'
      />
      <Dropdown.Item
        icon={MdEditDocument}
        label='Documents'
      />
      <Dropdown.Divider />
      <Dropdown.Item
        icon={MdSettings}
        label='Settings'
      />
    </Dropdown>
  );
};

export const Disabled = () => {
  return (
    <Dropdown>
      <Dropdown.Button disabled>
        Explore
      </Dropdown.Button>
      <Dropdown.Item
        label='People'
      />
      <Dropdown.Item
        label='Documents'
      />
      <Dropdown.Divider />
      <Dropdown.Item
        label='Settings'
      />
    </Dropdown>
  );
};
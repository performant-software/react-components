import React from 'react';
import Dropdown from '../../../tailwind-ui/src/components/Dropdown';
import { FaPaperclip, FaUser } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import faircopyLogo from '../assets/faircopy_logo.svg';

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

export const CustomButton = () => {
  return (
    <Dropdown>
      <Dropdown.Button>
        <img src={faircopyLogo} />
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
        icon={FaUser}
        label='People'
      />
      <Dropdown.Item
        icon={FaPaperclip}
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

export const Descriptions = () => {
  return (
    <Dropdown>
      <Dropdown.Button>
        Explore
      </Dropdown.Button>
      <Dropdown.Item
        label='People'
        description='Members of this project.'
      />
      <Dropdown.Item
        label='Documents'
        description='Census, tax records, and credit card statements.'
      />
      <Dropdown.Divider />
      <Dropdown.Item
        label='Settings'
        description='Project and user settings.'
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
import { useState } from "react";
import Navbar from "../../../tailwind-ui/src/components/Navbar";
import faircopyLogo from '../assets/faircopy_logo.svg'
import { action } from 'storybook/actions';
import { FaSignOutAlt, FaUser, FaUsers } from "react-icons/fa";

export default {
  title: 'Components/TailwindUI/Navbar',
  component: Navbar
};

export const Default = () => {
  const [active, setActive] = useState('soup')

  return (
    <Navbar divider>
      <Navbar.Logo>
        <img src={faircopyLogo} />
      </Navbar.Logo>
      <Navbar.Tabs>
        <Navbar.Tab
          active={active === 'soup'}
          label='Soup'
          onClick={() => setActive('soup')}
        />
        <Navbar.Tab
          active={active === 'sandwiches'}
          label='Sandwiches'
          onClick={() => setActive('sandwiches')}
        />
      </Navbar.Tabs>
      <Navbar.Controls>
        <FaUser />
        <FaUsers />
        <FaSignOutAlt />
      </Navbar.Controls>
    </Navbar>
  )
}
import { useState } from "react";
import Navbar from "../../../performant-ui/src/components/Navbar";
import faircopyLogo from '../assets/faircopy_logo.svg'
import { FaSignOutAlt, FaUser, FaUsers } from "react-icons/fa";
import Input from "../../../performant-ui/src/components/Input";

export default {
  title: 'Components/Performant UI/Navbar',
  component: Navbar
};

const CustomLink = ({href, label}) => {
  return (
    <div className="bg-red-200 rounded-full p-2 hover:bg-green-400">
      <a href={href}>{label}</a>
    </div>
  )
}

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
        <FaUser className="dark:text-white" />
        <FaUsers className="dark:text-white" />
        <FaSignOutAlt className="dark:text-white" />
      </Navbar.Controls>
    </Navbar>
  )
}

export const WithLinks = () => {
  return (
    <Navbar divider>
      <Navbar.Logo>
        <img src={faircopyLogo} />
      </Navbar.Logo>
      <Navbar.Tabs>
        <Navbar.Tab
          active
          label='Soup'
          href={'/soup'}
        />
        <Navbar.Tab
          label='Sandwiches'
          href={'/sandwiches'}
        />
      </Navbar.Tabs>
      <Navbar.Controls>
        <FaUser className="dark:text-white" />
        <FaUsers className="dark:text-white" />
        <FaSignOutAlt className="dark:text-white" />
      </Navbar.Controls>
    </Navbar>
  )
}

export const WithCustomTabComponents = () => {
  return (
    <Navbar divider>
      <Navbar.Logo>
        <img src={faircopyLogo} />
      </Navbar.Logo>
      <Navbar.Tabs>
        <Navbar.Tab
          active
          as={CustomLink}
          label='Soup'
          href='/soup'
        />
        <Navbar.Tab
          as={CustomLink}
          label='Sandwiches'
          href='/sandwiches'
        />
      </Navbar.Tabs>
      <Navbar.Controls>
        <FaUser className="dark:text-white" />
        <FaUsers className="dark:text-white" />
        <FaSignOutAlt className="dark:text-white" />
      </Navbar.Controls>
    </Navbar>
  )
}
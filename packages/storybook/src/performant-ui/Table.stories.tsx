import React, { useState } from 'react';
import Table from '../../../performant-ui/src/components/Table';
import { Button } from '../../../performant-ui/src';
import { FaUser } from 'react-icons/fa';

export default {
  title: 'Components/Performant UI/Table',
  component: Table
};

const data = [
  { name: "Virgil", title: "The Aeneid", genre: "Epic Poetry" },
  { name: "Ovid", title: "Metamorphoses", genre: "Narrative Poetry" },
  { name: "Cicero", title: "De Oratore", genre: "Rhetoric" },
  { name: "Julius Caesar", title: "Commentarii de Bello Gallico", genre: "Military History" },
  { name: "Tacitus", title: "Annals", genre: "History" },
  { name: "Seneca", title: "Letters from a Stoic", genre: "Philosophy" },
  { name: "Livy", title: "Ab Urbe Condita", genre: "History" },
  { name: "Horace", title: "Odes", genre: "Lyric Poetry" },
  { name: "Pliny the Elder", title: "Natural History", genre: "Natural Philosophy" },
  { name: "Martial", title: "Epigrams", genre: "Satirical Poetry" }
]

export const Default = () => {
  return (
    <Table label='Ancient Roman Books'>
      <Table.Head>
        <Table.HeadCell>
          Title
        </Table.HeadCell>
        <Table.HeadCell>
          Author
        </Table.HeadCell>
        <Table.HeadCell>
          Genre
        </Table.HeadCell>
      </Table.Head>
      {data.map(d => (
        <Table.Row
          key={d.name}
        >
          <Table.Cell>
            {d.title}
          </Table.Cell>
          <Table.Cell>
            {d.name}
          </Table.Cell>
          <Table.Cell>
            {d.genre}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table>
  );
};

export const NoLabel = () => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>
          Title
        </Table.HeadCell>
        <Table.HeadCell>
          Author
        </Table.HeadCell>
        <Table.HeadCell>
          Genre
        </Table.HeadCell>
      </Table.Head>
      {data.map(d => (
        <Table.Row
          key={d.name}
        >
          <Table.Cell>
            {d.title}
          </Table.Cell>
          <Table.Cell>
            {d.name}
          </Table.Cell>
          <Table.Cell>
            {d.genre}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table>
  );
};

export const Customized = () => {
  return (
    <Table
      classes={{ table: 'bg-red-100'}}
      label='Ancient Roman Books'
    >
      <Table.Head>
        <Table.HeadCell>
          Title
        </Table.HeadCell>
        <Table.HeadCell>
          Author
        </Table.HeadCell>
        <Table.HeadCell>
          Genre
        </Table.HeadCell>
      </Table.Head>
      {data.map(d => (
        <Table.Row
          key={d.name}
        >
          <Table.Cell className='italic'>
            {d.title}
          </Table.Cell>
          <Table.Cell className='flex items-center justify-center'>
            <FaUser />
          </Table.Cell>
          <Table.Cell>
            <Button>Download</Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table>
  );
};

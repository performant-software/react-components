import React, { useState } from 'react';
import Table from '../../../performant-ui/src/components/Table';

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

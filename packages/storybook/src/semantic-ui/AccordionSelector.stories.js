// @flow

import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { Button } from 'semantic-ui-react';
import _ from 'underscore';
import AccordionSelector from '../../../semantic-ui/src/components/AccordionSelector';
import AddModal from '../components/AddModal';
import Api from '../services/Api';

export default {
  title: 'Components/Semantic UI/AccordionSelector',
  component: AccordionSelector
};

const data = [{
  id: 1,
  first_name: 'Liuka',
  last_name: 'Cadwallader',
  title: 'Database Administrator III',
  manager_id: null
}, {
  id: 2,
  first_name: 'Ray',
  last_name: 'O\'Sheerin',
  title: 'Analog Circuit Design manager',
  manager_id: 1
}, {
  id: 3,
  first_name: 'Marian',
  last_name: 'Bassick',
  title: 'Executive Secretary',
  manager_id: 1
}, {
  id: 4,
  first_name: 'Maridel',
  last_name: 'Cerman',
  title: 'Technical Writer',
  manager_id: 1
}, {
  id: 5,
  first_name: 'Reggie',
  last_name: 'Keeton',
  title: 'Administrative Assistant II',
  manager_id: 1
}, {
  id: 6,
  first_name: 'Lev',
  last_name: 'Twidle',
  title: 'Senior Sales Associate',
  manager_id: 1
}, {
  id: 7,
  first_name: 'Rees',
  last_name: 'Scanlon',
  title: 'Accountant IV',
  manager_id: 5
}, {
  id: 8,
  first_name: 'Bondie',
  last_name: 'Dreier',
  title: 'GIS Technical Architect',
  manager_id: 2
}, {
  id: 9,
  first_name: 'Modesty',
  last_name: 'Aspy',
  title: 'Administrative Officer',
  manager_id: 4
}, {
  id: 10,
  first_name: 'Michal',
  last_name: 'Luckham',
  title: 'VP Marketing',
  manager_id: 2
}, {
  id: 11,
  first_name: 'Clarie',
  last_name: 'Ogley',
  title: 'Cost Accountant',
  manager_id: 2
}, {
  id: 12,
  first_name: 'Lidia',
  last_name: 'Hammell',
  title: 'Graphic Designer',
  manager_id: 5
}, {
  id: 13,
  first_name: 'Rutherford',
  last_name: 'De Matteis',
  title: 'Assistant Manager',
  manager_id: 3
}, {
  id: 14,
  first_name: 'Damaris',
  last_name: 'Balls',
  title: 'Software Engineer IV',
  manager_id: 1
}, {
  id: 15,
  first_name: 'Marjy',
  last_name: 'Tarrant',
  title: 'Social Worker',
  manager_id: 1
}, {
  id: 16,
  first_name: 'Arty',
  last_name: 'Antunez',
  title: 'Environmental Specialist',
  manager_id: 4
}, {
  id: 17,
  first_name: 'Lemuel',
  last_name: 'Huison',
  title: 'Assistant Manager',
  manager_id: 4
}, {
  id: 18,
  first_name: 'Kessiah',
  last_name: 'Kuhnt',
  title: 'Editor',
  manager_id: 4
}, {
  id: 19,
  first_name: 'Gisele',
  last_name: 'Coffey',
  title: 'Payment Adjustment Coordinator',
  manager_id: 4
}, {
  id: 20,
  first_name: 'Dorothee',
  last_name: 'Pandey',
  title: 'Help Desk Technician',
  manager_id: 2
}, {
  id: 21,
  first_name: 'Irena',
  last_name: 'Doog',
  title: 'Payment Adjustment Coordinator',
  manager_id: 5
}, {
  id: 22,
  first_name: 'Audre',
  last_name: 'Sloper',
  title: 'Recruiter',
  manager_id: 3
}, {
  id: 23,
  first_name: 'Allie',
  last_name: 'Byrch',
  title: 'Media Manager III',
  manager_id: 1
}, {
  id: 24,
  first_name: 'Eben',
  last_name: 'Boddis',
  title: 'Web Designer I',
  manager_id: 3
}, {
  id: 25,
  first_name: 'Diane',
  last_name: 'Gilbart',
  title: 'Electrical Engineer',
  manager_id: 3
}, {
  id: 26,
  first_name: 'Hewitt',
  last_name: 'Kirgan',
  title: 'Office Assistant IV',
  manager_id: 5
}, {
  id: 27,
  first_name: 'Chadd',
  last_name: 'Gartside',
  title: 'Chief Design Engineer',
  manager_id: 4
}, {
  id: 28,
  first_name: 'Lauryn',
  last_name: 'Henriques',
  title: 'Assistant Media Planner',
  manager_id: 1
}, {
  id: 29,
  first_name: 'Cloris',
  last_name: 'Tuiller',
  title: 'Assistant Media Planner',
  manager_id: 5
}, {
  id: 30,
  first_name: 'Nealson',
  last_name: 'Patterson',
  title: 'Accounting Assistant III',
  manager_id: 4
}, {
  id: 31,
  first_name: 'Anstice',
  last_name: 'Leveridge',
  title: 'Budget/Accounting Analyst II',
  manager_id: 2
}, {
  id: 32,
  first_name: 'Tobie',
  last_name: 'Venus',
  title: 'Tax Accountant',
  manager_id: 1
}, {
  id: 33,
  first_name: 'Kerstin',
  last_name: 'Fletham',
  title: 'Research Nurse',
  manager_id: 5
}, {
  id: 34,
  first_name: 'Mirabelle',
  last_name: 'Eisenberg',
  title: 'Internal Auditor',
  manager_id: 2
}, {
  id: 35,
  first_name: 'Phillipp',
  last_name: 'Mallia',
  title: 'Senior Sales Associate',
  manager_id: 4
}, {
  id: 36,
  first_name: 'Aurore',
  last_name: 'Whysall',
  title: 'Budget/Accounting Analyst II',
  manager_id: 1
}, {
  id: 37,
  first_name: 'Hastie',
  last_name: 'Cahalan',
  title: 'Human Resources Assistant I',
  manager_id: 5
}, {
  id: 38,
  first_name: 'Jim',
  last_name: 'Chestle',
  title: 'Analyst Programmer',
  manager_id: 3
}, {
  id: 39,
  first_name: 'Nerti',
  last_name: 'Witchell',
  title: 'Statistician II',
  manager_id: 2
}, {
  id: 40,
  first_name: 'Nerita',
  last_name: 'Spincke',
  title: 'Staff Accountant I',
  manager_id: 5
}, {
  id: 41,
  first_name: 'Cathrin',
  last_name: 'Bickerdike',
  title: 'Financial Analyst',
  manager_id: 3
}, {
  id: 42,
  first_name: 'Morten',
  last_name: 'Eixenberger',
  title: 'Associate Professor',
  manager_id: 5
}, {
  id: 43,
  first_name: 'Alvie',
  last_name: 'Toomey',
  title: 'Staff Accountant I',
  manager_id: 2
}, {
  id: 44,
  first_name: 'Lynne',
  last_name: 'Lowndsbrough',
  title: 'Analog Circuit Design manager',
  manager_id: 3
}, {
  id: 45,
  first_name: 'Jdavie',
  last_name: 'Zorzi',
  title: 'Clinical Specialist',
  manager_id: 1
}, {
  id: 46,
  first_name: 'Bibbye',
  last_name: 'Watsam',
  title: 'Data Coordiator',
  manager_id: 5
}, {
  id: 47,
  first_name: 'Charmaine',
  last_name: 'Hurd',
  title: 'Business Systems Development Analyst',
  manager_id: 2
}, {
  id: 48,
  first_name: 'Milzie',
  last_name: 'Shorter',
  title: 'Health Coach IV',
  manager_id: 3
}, {
  id: 49,
  first_name: 'Walsh',
  last_name: 'Vesque',
  title: 'Nurse Practicioner',
  manager_id: 1
}, {
  id: 50,
  first_name: 'Shelia',
  last_name: 'Davidow',
  title: 'GIS Technical Architect',
  manager_id: 1
}];

export const Default = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        content='Open'
        onClick={() => setVisible(true)}
      />
      <AccordionSelector
        collectionName='items'
        getChildItems={(items, item) => _.where(items, { manager_id: item.id })}
        getRootItems={(items) => _.where(items, { manager_id: null })}
        isSelectable={() => true}
        modal={{
          component: AddModal,
          onSave: () => {
            action('add save')();
            return Promise.resolve({});
          }
        }}
        onClose={() => {
          action('close')();
          setVisible(false);
        }}
        onSave={() => {
          action('save')();
          setVisible(false);
          return Promise.resolve();
        }}
        onSearch={(parentId, search) => Api.onNestedLoad({
          items: data,
          parentKey: 'manager_id',
          parentId,
          search
        })}
        open={visible}
        renderItem={(item) => `${item.first_name} ${item.last_name} (${item.title})`}
        showToggle={() => true}
      />
    </>
  );
}

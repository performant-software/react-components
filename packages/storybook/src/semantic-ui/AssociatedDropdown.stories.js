// @flow

import React from 'react';
import { action } from 'storybook/actions';
import { Form, Modal } from 'semantic-ui-react';
import AddModal from '../components/AddModal';
import Api from '../services/Api';
import AssociatedDropdown from '../../../semantic-ui/src/components/AssociatedDropdown';
import { type EditContainerProps } from '../../../shared/src/components/EditContainer';

export default {
  title: 'Components/Semantic UI/AssociatedDropdown',
  component: AssociatedDropdown
};

const items = [{
  id: 1,
  company: 'Bradtke LLC',
  email: 'smccunn0@symantec.com',
  card: '4913389273457809',
  country: 'China'
}, {
  id: 2,
  company: 'Jacobi Inc',
  email: 'rrivard1@abc.net.au',
  card: '30460843005398',
  country: 'Zimbabwe'
}, {
  id: 3,
  company: 'Mraz, Blanda and Hettinger',
  email: 'rrummins2@fastcompany.com',
  card: '6709016072353592810',
  country: 'Iran'
}, {
  id: 4,
  company: 'Rutherford, King and Bergstrom',
  email: 'dkrauss3@mit.edu',
  card: '374288311284433',
  country: 'Bosnia and Herzegovina'
}, {
  id: 5,
  company: 'Robel Group',
  email: 'rkenworth4@instagram.com',
  card: '201500535736652',
  country: 'Colombia'
}, {
  id: 6,
  company: 'Homenick-Hayes',
  email: 'abethel5@google.pl',
  card: '561039160722960141',
  country: 'Indonesia'
}, {
  id: 7,
  company: 'Donnelly, Ernser and Frami',
  email: 'jgoodere6@house.gov',
  card: '201584082967167',
  country: 'Indonesia'
}, {
  id: 8,
  company: 'Terry LLC',
  email: 'lmaass7@instagram.com',
  card: '3563814170090101',
  country: 'Russia'
}, {
  id: 9,
  company: 'Conroy, Goodwin and Reichel',
  email: 'oborless8@dailymotion.com',
  card: '6762685505421916973',
  country: 'Afghanistan'
}, {
  id: 10,
  company: 'Herzog, Ullrich and Gottlieb',
  email: 'jstienton9@oracle.com',
  card: '5602259377328868094',
  country: 'Portugal'
}, {
  id: 11,
  company: 'Crona, Smith and Buckridge',
  email: 'rbryersa@gizmodo.com',
  card: '630430550316356334',
  country: 'United States'
}, {
  id: 12,
  company: 'Bashirian-Wehner',
  email: 'ltootingb@disqus.com',
  card: '490326679793549693',
  country: 'Japan'
}, {
  id: 13,
  company: 'Heathcote, Herman and Hand',
  email: 'dscimonic@spotify.com',
  card: '4331723237538',
  country: 'Bolivia'
}, {
  id: 14,
  company: 'Walter, Haley and Leannon',
  email: 'achildd@google.ca',
  card: '3562847383429600',
  country: 'Philippines'
}, {
  id: 15,
  company: 'Bechtelar-Abernathy',
  email: 'sgallallye@dell.com',
  card: '201879893708523',
  country: 'Anguilla'
}, {
  id: 16,
  company: 'Ankunding, Schuster and Denesik',
  email: 'tspilsburyf@trellian.com',
  card: '633471981525787619',
  country: 'Thailand'
}, {
  id: 17,
  company: 'Rowe, Kuvalis and Funk',
  email: 'rryallg@netvibes.com',
  card: '3541819339298849',
  country: 'China'
}, {
  id: 18,
  company: 'Lakin-West',
  email: 'jraithbyh@so-net.ne.jp',
  card: '3563967992717341',
  country: 'Russia'
}, {
  id: 19,
  company: 'Tillman Group',
  email: 'jminersi@miibeian.gov.cn',
  card: '5100149854682658',
  country: 'Zambia'
}, {
  id: 20,
  company: 'Hickle-Gaylord',
  email: 'aandriesj@techcrunch.com',
  card: '3558556695561358',
  country: 'Mexico'
}, {
  id: 21,
  company: 'Bednar LLC',
  email: 'cbiggk@marketwatch.com',
  card: '3567695608528374',
  country: 'Czech Republic'
}, {
  id: 22,
  company: 'Herzog-Hilpert',
  email: 'esimenonl@china.com.cn',
  card: '3536962417052170',
  country: 'Canada'
}, {
  id: 23,
  company: 'Koss and Sons',
  email: 'cmandellm@yolasite.com',
  card: '56022164441318086',
  country: 'China'
}, {
  id: 24,
  company: 'Bahringer-King',
  email: 'wipsgraven@reuters.com',
  card: '30346865572409',
  country: 'China'
}, {
  id: 25,
  company: 'Roberts-Bernier',
  email: 'kbeacrofto@youku.com',
  card: '6759158703902200629',
  country: 'Japan'
}, {
  id: 26,
  company: 'Blanda-Batz',
  email: 'krosengrenp@dell.com',
  card: '3579772020663695',
  country: 'Iran'
}, {
  id: 27,
  company: 'Robel and Sons',
  email: 'araspq@accuweather.com',
  card: '3542184973908024',
  country: 'Argentina'
}, {
  id: 28,
  company: 'Ernser, Raynor and Satterfield',
  email: 'rsaxonr@wordpress.com',
  card: '3576887685153031',
  country: 'Thailand'
}, {
  id: 29,
  company: 'Langosh, Wiza and Flatley',
  email: 'rdeluces@domainmarket.com',
  card: '30500704893745',
  country: 'South Africa'
}, {
  id: 30,
  company: 'Keeling, Price and Block',
  email: 'crameyt@spotify.com',
  card: '5421565170713038',
  country: 'China'
}, {
  id: 31,
  company: 'Schulist, Pagac and Maggio',
  email: 'emckiddinu@rakuten.co.jp',
  card: '564182253581069234',
  country: 'Malawi'
}, {
  id: 32,
  company: 'Spencer, Jenkins and Eichmann',
  email: 'lcoxwellv@mtv.com',
  card: '3534800446615967',
  country: 'Micronesia'
}, {
  id: 33,
  company: 'Lynch Group',
  email: 'ssousterw@dell.com',
  card: '3577275855680851',
  country: 'Brazil'
}, {
  id: 34,
  company: 'Lockman-Conn',
  email: 'kbubeerx@mlb.com',
  card: '3533866580327298',
  country: 'Brazil'
}, {
  id: 35,
  company: 'Nolan-Hartmann',
  email: 'aklimentyevy@tiny.cc',
  card: '67632551442557390',
  country: 'Mexico'
}, {
  id: 36,
  company: 'Olson-Krajcik',
  email: 'ahedditehz@gravatar.com',
  card: '63045234297292849',
  country: 'Indonesia'
}, {
  id: 37,
  company: 'Schulist, Kshlerin and Gerlach',
  email: 'mkollas10@scientificamerican.com',
  card: '3578914776530972',
  country: 'United States'
}, {
  id: 38,
  company: 'Bailey Inc',
  email: 'sstonard11@cam.ac.uk',
  card: '5602222106700165',
  country: 'Malaysia'
}, {
  id: 39,
  company: 'Hahn, Gibson and Bosco',
  email: 'omozzini12@goodreads.com',
  card: '3587897778070650',
  country: 'Serbia'
}, {
  id: 40,
  company: 'Rath, Homenick and Vandervort',
  email: 'zmccracken13@kickstarter.com',
  card: '5100138352713008',
  country: 'China'
}, {
  id: 41,
  company: 'Swift, Krajcik and Nader',
  email: 'tewing14@msu.edu',
  card: '5893107269830645079',
  country: 'Japan'
}, {
  id: 42,
  company: 'Emmerich, Barrows and Cremin',
  email: 'tmacgibbon15@foxnews.com',
  card: '0604449000839885',
  country: 'Ukraine'
}, {
  id: 43,
  company: 'Harvey and Sons',
  email: 'cstanners16@loc.gov',
  card: '0604046190701436',
  country: 'Russia'
}, {
  id: 44,
  company: 'Homenick-Schinner',
  email: 'rceller17@independent.co.uk',
  card: '4041370321598',
  country: 'Greece'
}, {
  id: 45,
  company: 'Kulas and Sons',
  email: 'ehindrick18@sogou.com',
  card: '67639028811555100',
  country: 'United States'
}, {
  id: 46,
  company: 'Bradtke, Cormier and Prohaska',
  email: 'tkaplin19@usgs.gov',
  card: '4844737734107872',
  country: 'Thailand'
}, {
  id: 47,
  company: "Erdman, Wintheiser and O'Keefe",
  email: 'amabee1a@microsoft.com',
  card: '3563676197254006',
  country: 'Russia'
}, {
  id: 48,
  company: 'Koelpin, Runolfsdottir and Hills',
  email: 'gdewar1b@flickr.com',
  card: '5641824808798081994',
  country: 'Indonesia'
}, {
  id: 49,
  company: 'Mayert Inc',
  email: 'ysurcomb1c@google.co.uk',
  card: '5108757426478579',
  country: 'Brazil'
}, {
  id: 50,
  company: 'Haag, Effertz and Hauck',
  email: 'charmour1d@eventbrite.com',
  card: '345179029963846',
  country: 'Ukraine'
}];

export const Default = () => (
  <AssociatedDropdown
    collectionName='items'
    modal={{
      component: AddModal,
      onSave: () => {
        action('save')();
        return Promise.resolve({});
      }
    }}
    onSearch={(search) => Api.onLoad({ items, search, sort_by: 'text' })}
    onSelection={action('selection')}
    placeholder='Search'
    renderOption={(item) => ({
      key: item.id,
      value: item.id,
      text: item.company,
      description: item.country
    })}
  />
);

const TestModal = (props: EditContainerProps) => (
  <Modal
    as={Form}
    centered={false}
    open
  >
    <Modal.Header
      content={props.item.id ? 'Edit' : 'Add'}
    />
    <Modal.Content>
      <Form.Input
        label='Company'
        onChange={props.onTextInputChange.bind(this, 'company')}
        value={props.item.company}
      />
      <Form.Input
        label='Email'
        onChange={props.onTextInputChange.bind(this, 'email')}
        value={props.item.email}
      />
      <Form.Input
        label='Card'
        onChange={props.onTextInputChange.bind(this, 'card')}
        value={props.item.card}
      />
    </Modal.Content>
    { props.children }
  </Modal>
);

export const WithEditButton = () => (
  <AssociatedDropdown
    collectionName='items'
    modal={{
      component: TestModal,
      onSave: () => {
        action('save')();
        return Promise.resolve({});
      },
      props: {
        onInitialize: (id) => {
          action('initialize')();
          return Promise.resolve({ ...items.find((i) => i.id === id) });
        }
      }
    }}
    onSearch={(search) => Api.onLoad({ items, search, sort_by: 'text' })}
    onSelection={action('selection')}
    placeholder='Search'
    renderOption={(item) => ({
      key: item.id,
      value: item.id,
      text: item.company,
      description: item.country
    })}
  />
);

export const FormField = () => (
  <Form>
    <Form.Input
      label='Field'
      required
    >
      <AssociatedDropdown
        collectionName='items'
        modal={{
          component: AddModal,
          onSave: () => {
            action('save')();
            return Promise.resolve({});
          }
        }}
        onSearch={(search) => Api.onLoad({ items, search, sort_by: 'text' })}
        onSelection={action('selection')}
        placeholder='Search'
        renderOption={(item) => ({
          key: item.id,
          value: item.id,
          text: item.company,
          description: item.country
        })}
      />
    </Form.Input>
  </Form>
);

export const CustomButtons = () => (
  <AssociatedDropdown
    buttons={[{
      name: 'edit',
      icon: 'edit'
    }, {
      basic: false,
      color: 'orange',
      name: 'add',
      icon: 'coffee'
    }, {
      name: 'clear',
      content: 'Clear Value!'
    }]}
    collectionName='items'
    modal={{
      component: AddModal,
      props: {
        onInitialize: () => Promise.resolve({ })
      },
      onSave: () => {
        action('save')();
        return Promise.resolve({});
      }
    }}
    onSearch={(search) => Api.onLoad({ items, search, sort_by: 'text' })}
    onSelection={action('selection')}
    placeholder='Search'
    renderOption={(item) => ({
      key: item.id,
      value: item.id,
      text: item.company,
      description: item.country
    })}
  />
);

export const AdditionalButtons = () => (
  <AssociatedDropdown
    buttons={[{
      name: 'add'
    }, {
      name: 'clear'
    }, {
      basic: true,
      name: 'navigate',
      content: 'Navigate',
      icon: 'world',
      onClick: action('navigate'),
      type: 'button'
    }]}
    collectionName='items'
    modal={{
      component: AddModal,
      props: {
        onInitialize: () => Promise.resolve({ })
      },
      onSave: () => {
        action('save')();
        return Promise.resolve({});
      }
    }}
    onSearch={(search) => Api.onLoad({ items, search, sort_by: 'text' })}
    onSelection={action('selection')}
    placeholder='Search'
    renderOption={(item) => ({
      key: item.id,
      value: item.id,
      text: item.company,
      description: item.country
    })}
  />
);

// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { Card } from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../AddModal';
import Api from '../../services/Api';
import Selectize from '../../../src/semantic-ui/Selectize';
import SelectizeHeader from '../../../src/semantic-ui/SelectizeHeader';

export default {
  title: 'Components/Semantic UI/Selectize',
  decorators: [withA11y, withKnobs]
};

const items = [{
  id: 1,
  first_name: 'Babbette',
  last_name: 'Matias',
  email: 'bmatias0@slate.com',
  gender: 'Female',
  ip_address: '68.185.74.116'
}, {
  id: 2,
  first_name: 'Christie',
  last_name: 'Dayes',
  email: 'cdayes1@plala.or.jp',
  gender: 'Female',
  ip_address: '228.208.87.119'
}, {
  id: 3,
  first_name: 'Lewiss',
  last_name: 'Tarry',
  email: 'ltarry2@bbc.co.uk',
  gender: 'Male',
  ip_address: '136.96.152.44'
}, {
  id: 4,
  first_name: 'Crystal',
  last_name: 'Stanlock',
  email: 'cstanlock3@loc.gov',
  gender: 'Female',
  ip_address: '85.93.133.239'
}, {
  id: 5,
  first_name: 'Wittie',
  last_name: 'Brammer',
  email: 'wbrammer4@myspace.com',
  gender: 'Male',
  ip_address: '55.224.6.222'
}, {
  id: 6,
  first_name: 'Violette',
  last_name: 'Hourahan',
  email: 'vhourahan5@mac.com',
  gender: 'Female',
  ip_address: '53.13.228.183'
}, {
  id: 7,
  first_name: 'Peirce',
  last_name: 'Ismail',
  email: 'pismail6@gravatar.com',
  gender: 'Male',
  ip_address: '154.55.159.215'
}, {
  id: 8,
  first_name: 'Elene',
  last_name: 'Doud',
  email: 'edoud7@ft.com',
  gender: 'Female',
  ip_address: '19.158.216.172'
}, {
  id: 9,
  first_name: 'Brigit',
  last_name: 'Hugonet',
  email: 'bhugonet8@ning.com',
  gender: 'Female',
  ip_address: '118.40.128.133'
}, {
  id: 10,
  first_name: 'Horatio',
  last_name: 'Alltimes',
  email: 'halltimes9@1und1.de',
  gender: 'Male',
  ip_address: '253.201.243.207'
}, {
  id: 11,
  first_name: 'Perice',
  last_name: 'Matei',
  email: 'pmateia@zimbio.com',
  gender: 'Male',
  ip_address: '98.72.61.217'
}, {
  id: 12,
  first_name: 'Bart',
  last_name: 'Girardey',
  email: 'bgirardeyb@google.es',
  gender: 'Male',
  ip_address: '107.90.46.43'
}, {
  id: 13,
  first_name: 'Darleen',
  last_name: 'Tobin',
  email: 'dtobinc@google.com.hk',
  gender: 'Female',
  ip_address: '69.36.52.193'
}, {
  id: 14,
  first_name: 'Adler',
  last_name: 'Burgoine',
  email: 'aburgoined@cargocollective.com',
  gender: 'Male',
  ip_address: '171.240.132.229'
}, {
  id: 15,
  first_name: 'Candi',
  last_name: 'Aleksahkin',
  email: 'caleksahkine@eventbrite.com',
  gender: 'Female',
  ip_address: '30.219.155.26'
}, {
  id: 16,
  first_name: 'Nixie',
  last_name: 'McGilben',
  email: 'nmcgilbenf@comcast.net',
  gender: 'Female',
  ip_address: '72.237.239.228'
}, {
  id: 17,
  first_name: 'Isobel',
  last_name: 'Labro',
  email: 'ilabrog@state.tx.us',
  gender: 'Female',
  ip_address: '98.122.71.202'
}, {
  id: 18,
  first_name: 'Gabe',
  last_name: 'Peabody',
  email: 'gpeabodyh@zimbio.com',
  gender: 'Male',
  ip_address: '186.191.72.105'
}, {
  id: 19,
  first_name: 'Godard',
  last_name: 'Beynon',
  email: 'gbeynoni@youtube.com',
  gender: 'Male',
  ip_address: '51.113.126.179'
}, {
  id: 20,
  first_name: 'Mikel',
  last_name: 'Mewe',
  email: 'mmewej@de.vu',
  gender: 'Male',
  ip_address: '36.156.55.57'
}, {
  id: 21,
  first_name: 'Thurston',
  last_name: 'Pyett',
  email: 'tpyettk@canalblog.com',
  gender: 'Male',
  ip_address: '185.171.83.229'
}, {
  id: 22,
  first_name: 'Elise',
  last_name: 'Gomm',
  email: 'egomml@cdc.gov',
  gender: 'Female',
  ip_address: '53.168.65.35'
}, {
  id: 23,
  first_name: 'Kelby',
  last_name: 'Acom',
  email: 'kacomm@bing.com',
  gender: 'Male',
  ip_address: '99.30.164.253'
}, {
  id: 24,
  first_name: 'Ashleigh',
  last_name: 'Loxdale',
  email: 'aloxdalen@netlog.com',
  gender: 'Female',
  ip_address: '185.15.148.130'
}, {
  id: 25,
  first_name: 'Jamaal',
  last_name: 'Delete',
  email: 'jdeleteo@pcworld.com',
  gender: 'Male',
  ip_address: '14.79.66.120'
}, {
  id: 26,
  first_name: 'Massimiliano',
  last_name: 'Mingasson',
  email: 'mmingassonp@census.gov',
  gender: 'Male',
  ip_address: '13.161.135.90'
}, {
  id: 27,
  first_name: 'Humfrid',
  last_name: 'Elliott',
  email: 'helliottq@google.ca',
  gender: 'Male',
  ip_address: '49.180.156.32'
}, {
  id: 28,
  first_name: 'Eugenie',
  last_name: 'Welden',
  email: 'eweldenr@auda.org.au',
  gender: 'Female',
  ip_address: '10.150.150.174'
}, {
  id: 29,
  first_name: 'Nataline',
  last_name: 'Cristoforetti',
  email: 'ncristoforettis@adobe.com',
  gender: 'Female',
  ip_address: '33.58.129.75'
}, {
  id: 30,
  first_name: 'Roanne',
  last_name: 'Burkin',
  email: 'rburkint@sbwire.com',
  gender: 'Female',
  ip_address: '164.250.141.17'
}, {
  id: 31,
  first_name: 'Keen',
  last_name: 'Rydings',
  email: 'krydingsu@etsy.com',
  gender: 'Male',
  ip_address: '86.123.206.118'
}, {
  id: 32,
  first_name: 'Herculie',
  last_name: 'Lethcoe',
  email: 'hlethcoev@barnesandnoble.com',
  gender: 'Male',
  ip_address: '155.193.52.14'
}, {
  id: 33,
  first_name: 'Brinn',
  last_name: 'Sharply',
  email: 'bsharplyw@epa.gov',
  gender: 'Female',
  ip_address: '248.200.54.21'
}, {
  id: 34,
  first_name: 'Bruce',
  last_name: 'Kemmish',
  email: 'bkemmishx@bigcartel.com',
  gender: 'Male',
  ip_address: '121.222.9.255'
}, {
  id: 35,
  first_name: 'Aubine',
  last_name: 'Vasquez',
  email: 'avasquezy@yale.edu',
  gender: 'Female',
  ip_address: '118.0.7.3'
}, {
  id: 36,
  first_name: 'Denna',
  last_name: 'Adamek',
  email: 'dadamekz@slashdot.org',
  gender: 'Female',
  ip_address: '77.210.179.143'
}, {
  id: 37,
  first_name: 'Kassie',
  last_name: 'Perett',
  email: 'kperett10@themeforest.net',
  gender: 'Female',
  ip_address: '252.186.29.77'
}, {
  id: 38,
  first_name: 'Alessandro',
  last_name: 'June',
  email: 'ajune11@wix.com',
  gender: 'Male',
  ip_address: '12.164.64.155'
}, {
  id: 39,
  first_name: 'Sidonia',
  last_name: 'Doody',
  email: 'sdoody12@unc.edu',
  gender: 'Female',
  ip_address: '137.218.129.36'
}, {
  id: 40,
  first_name: 'Adrian',
  last_name: 'Morton',
  email: 'amorton13@patch.com',
  gender: 'Male',
  ip_address: '139.153.197.214'
}, {
  id: 41,
  first_name: 'Wilmer',
  last_name: 'Sanney',
  email: 'wsanney14@ezinearticles.com',
  gender: 'Male',
  ip_address: '77.79.147.60'
}, {
  id: 42,
  first_name: 'Jesus',
  last_name: 'Dye',
  email: 'jdye15@marketwatch.com',
  gender: 'Male',
  ip_address: '253.153.219.221'
}, {
  id: 43,
  first_name: 'Esta',
  last_name: 'Bleue',
  email: 'ebleue16@msn.com',
  gender: 'Female',
  ip_address: '154.121.78.139'
}, {
  id: 44,
  first_name: 'Winthrop',
  last_name: 'Offa',
  email: 'woffa17@odnoklassniki.ru',
  gender: 'Male',
  ip_address: '61.17.252.233'
}, {
  id: 45,
  first_name: 'Casie',
  last_name: 'Beekmann',
  email: 'cbeekmann18@salon.com',
  gender: 'Female',
  ip_address: '129.58.193.61'
}, {
  id: 46,
  first_name: 'Karoly',
  last_name: 'Sill',
  email: 'ksill19@cbc.ca',
  gender: 'Female',
  ip_address: '96.115.55.70'
}, {
  id: 47,
  first_name: 'Gram',
  last_name: 'Yakushkev',
  email: 'gyakushkev1a@squarespace.com',
  gender: 'Male',
  ip_address: '116.107.236.156'
}, {
  id: 48,
  first_name: 'Lutero',
  last_name: 'Phizackarley',
  email: 'lphizackarley1b@altervista.org',
  gender: 'Male',
  ip_address: '223.238.72.210'
}, {
  id: 49,
  first_name: 'Claire',
  last_name: 'Dimond',
  email: 'cdimond1c@discovery.com',
  gender: 'Female',
  ip_address: '196.8.199.80'
}, {
  id: 50,
  first_name: 'Bentley',
  last_name: 'Bernardet',
  email: 'bbernardet1d@joomla.org',
  gender: 'Male',
  ip_address: '105.163.89.168'
}];

export const Default = () => (
  <Selectize
    collectionName='items'
    modal={{
      component: AddModal,
      onSave: () => {
        action('add save')();
        return Promise.resolve();
      }
    }}
    onClose={action('close')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onSave={action('save')}
    renderItem={(item) => `${item.first_name} ${item.last_name}`}
    title={text('Title', 'Select some')}
  />
);

export const SingleSelect = () => (
  <Selectize
    collectionName='items'
    modal={{
      component: AddModal,
      onSave: () => {
        action('add save')();
        return Promise.resolve();
      }
    }}
    multiple={false}
    onClose={action('close')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onSave={action('save')}
    renderItem={(item) => `${item.first_name} ${item.last_name}`}
    title={text('Title', 'Select some')}
  />
);

export const CustomHeader = () => (
  <Selectize
    collectionName='items'
    modal={{
      component: AddModal,
      onSave: () => {
        action('add save')();
        return Promise.resolve();
      }
    }}
    onClose={action('close')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onSave={action('save')}
    renderHeader={({ onItemClick, selectedItem, selectedItems }) => (
      <SelectizeHeader
        isSelected={(item) => item === selectedItem}
        items={selectedItems}
        onItemClick={onItemClick}
        renderItem={(item) => (
          <Card>
            <Card.Content>
              <Card.Header
                content={`${item.first_name} ${item.last_name}`}
              />
              <Card.Meta
                content={item.email}
              />
            </Card.Content>
          </Card>
        )}
      />
    )}
    renderItem={(item) => `${item.first_name} ${item.last_name}`}
    title={text('Title', 'Select some')}
  />
);

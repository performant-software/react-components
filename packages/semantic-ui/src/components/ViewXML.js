// @flow

import React, { type ComponentType, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Button, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  highlighter?: any,
  opener: {
    component: ComponentType<any>,
    props: any
  },
  style: any,
  xml: string
};

const ViewXML = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const OpenerComponent = props.opener.component;
  const openerProps = props.opener.props;

  return (
    <>
      <OpenerComponent
        {...openerProps}
        className='view-xml-trigger'
        onClick={() => setShowModal(true)}
      />
      <Modal
        className='view-xml-modal'
        centered={false}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header
          content={i18n.t('ViewXML.title')}
        />
        <Modal.Content>
          <SyntaxHighlighter
            language='xml'
            style={props.highlighter}
          >
            { props.xml }
          </SyntaxHighlighter>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content='Close'
            inverted
            primary
            onClick={() => setShowModal(false)}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

ViewXML.defaultProps = {
  opener: {
    component: Button,
    props: {
      content: i18n.t('ViewXML.buttons.view')
    }
  },
  style: {
    maxHeight: '70vh'
  }
};

export default ViewXML;

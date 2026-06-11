// @flow

import { ModalContext } from '@performant-software/shared-components';
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

const ViewXML = ({opener = {
    component: Button,
    props: {
      content: i18n.t('ViewXML.buttons.view')
    }
  }, style = {
    maxHeight: '70vh'
  }, ...props}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const OpenerComponent = opener.component;
  const openerProps = opener.props;

  return (
    <ModalContext.Consumer>
      { (mountNode) => (
        <>
          <OpenerComponent
            {...openerProps}
            className='view-xml-trigger'
            onClick={() => setShowModal(true)}
          />
          <Modal
            className='view-xml-modal'
            closeIcon
            centered={false}
            mountNode={mountNode}
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
                basic
                content={i18n.t('Common.buttons.close')}
                onClick={() => setShowModal(false)}
              />
            </Modal.Actions>
          </Modal>
        </>
      )}
    </ModalContext.Consumer>
  );
};

export default ViewXML;

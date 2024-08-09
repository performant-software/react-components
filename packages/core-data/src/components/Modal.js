// @flow

import { ModalContext } from '@performant-software/shared-components';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { X } from 'lucide-react';
import React, { useContext, type Node } from 'react';

type Props = {
  /**
   * If `true` the modal will be centered in the viewport.
   */
  centered?: boolean,

  /**
   * Modal content.
   */
  children?: Node,

  /**
   * (Optional) class name to apply to the modal content.
   */
  className?: string,

  /**
   * (Optional) modal description.
   */
  description?: string,

  /**
   * Callback fired when the closed icon is clicked. If this prop is not provided, a close
   * icon will not be rendered.
   */
  onClose: () => void,

  /**
   * If `true` the modal will be displayed.
   */
  open?: boolean,

  /**
   * If `true`, the modal content will scroll instead of the viewport.
   */
  scrolling?: boolean,

  /**
   * (Optional) modal title.
   */
  title?: string
};

const Modal = (props: Props) => {
  const rootRef = useContext(ModalContext);

  return (
    <Dialog.Root
      open={props.open}
    >
      <Dialog.Portal
        container={rootRef}
      >
        <Dialog.Overlay
          className={clsx(
            'fixed bg-black/70 inset-0 transition-opacity flex justify-center',
            { 'items-center': props.centered },
            { 'overflow-auto': !props.scrolling }
          )}
        >
          <Dialog.Content
            className={clsx(
              'bg-white',
              'rounded',
              'shadow',
              'm-5',
              'relative',
              'h-fit',
              'min-w-[50%]',
              'px-5',
              'pt-4',
              'pb-10',
              'transition-all',
              'focus:outline-none',
              { 'overflow-auto': props.scrolling },
              { 'max-h-[85vh]': props.scrolling },
              props.className
            )}
          >
            { props.onClose && (
              <Dialog.Close
                asChild
              >
                <div
                  className='flex justify-end items-center'
                >
                  <button
                    aria-label='Close Modal'
                    className={clsx(
                      'rounded-full',
                      'p-2',
                      'inline-flex',
                      'items-center',
                      'justify-center',
                      'focus:outline-none'
                    )}
                    onClick={props.onClose}
                    type='button'
                  >
                    <X
                      size={16}
                    />
                  </button>
                </div>
              </Dialog.Close>
            )}
            { props.title && (
              <Dialog.Title
                asChild
              >
                <h2
                  className='py-0.5 font-semibold text-lg'
                >
                  { props.title }
                </h2>
              </Dialog.Title>
            )}
            { props.description && (
              <Dialog.Description
                className='leading-normal text-muted my-2'
              >
                { props.description }
              </Dialog.Description>
            )}
            { props.children }
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

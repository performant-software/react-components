// @flow

import { Transition } from '@headlessui/react';
import React from 'react';
import Icon from './Icon';

type Props = {
  content: string,
  header: string,
  icon?: {
    className?: string,
    name: string,
    size?: number
  },
  onClose: () => void,
  open?: boolean
};

const Notification = (props: Props) => (
  <div
    aria-live='assertive'
    className='pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6'
  >
    <div
      className='flex w-full flex-col items-center space-y-4 sm:items-end'
    >
      <Transition
        show={props.open}
      >
        <div
          className={`
            pointer-events-auto 
            w-full 
            max-w-sm 
            overflow-hidden 
            rounded-lg 
            bg-white 
            shadow-lg 
            ring-1 
            ring-black/5 
            transition 
            data-closed:opacity-0 
            data-enter:transform 
            data-enter:duration-300 
            data-enter:ease-out 
            data-closed:data-enter:translate-y-2 
            data-leave:duration-100 
            data-leave:ease-in 
            data-closed:data-enter:sm:translate-x-2 
            data-closed:data-enter:sm:translate-y-0
          `}
        >
          <div
            className='p-4'
          >
            <div
              className='flex items-start'
            >
              <div
                className='shrink-0'
              >
                { props.icon && (
                  <Icon
                    className={props.icon.className}
                    name={props.icon.name}
                    size={props.icon.size}
                  />
                )}
              </div>
              <div
                className='ml-3 w-0 flex-1 pt-0.5'
              >
                <p
                  className='text-sm font-medium text-gray-900'
                >
                  { props.header }
                </p>
                <p
                  className='mt-1 text-sm text-gray-500'
                >
                  { props.content }
                </p>
              </div>
              <div
                className='ml-4 flex shrink-0'
              >
                <button
                  className={`
                    inline-flex 
                    rounded-md 
                    bg-white 
                    text-gray-400 
                    hover:text-gray-500 
                    focus:ring-2 
                    focus:ring-indigo-500 
                    focus:ring-offset-2 
                    focus:outline-hidden
                  `}
                  onClick={props.onClose}
                  type='button'
                >
                  <span
                    className='sr-only'
                  >
                    Close
                  </span>
                  <Icon
                    name='close'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
);

export default Notification;

import React from 'react';
import { Dialog as HeadlessDialog, DialogBackdrop, DialogPanel, DialogProps } from '@headlessui/react';
import clsx from 'clsx';

const Dialog: React.FC = (props: DialogProps) => {
  return (
    <HeadlessDialog
      {...props}
      className='relative z-50'
    >
      <DialogBackdrop
        className='fixed inset-0 bg-black/10 flex justify-center text-zinc-950'
      >
        <DialogPanel
          className={clsx(
            'bg-white rounded-xl shadow-lg p-6 fixed font-sans',
            props.className
          )}
        >
        {props.children}
        </DialogPanel>
      </DialogBackdrop>
    </HeadlessDialog>
  );
};

export default Dialog;

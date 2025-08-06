import React, { useState } from 'react';
import Dialog from '../../../tailwind-ui/src/components/Dialog';
import { Button } from '../../../tailwind-ui/src';

export default {
  title: 'Components/TailwindUI/Dialog',
  component: Dialog
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Add User
      </Button>
      <Dialog
        className='w-[50vw] max-w-[50vw] max-h-[50vh] top-[30%]'
        open={open}
        onClose={() => setOpen(false)}
      >
        <h3 className='text-xl font-semibold'>Add user</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, perspiciatis facilis enim illum distinctio quaerat deserunt excepturi veniam accusantium dolorem, similique tempora at sed aspernatur iusto! Obcaecati consequatur enim inventore?</p>
      </Dialog>
    </>
  );
};

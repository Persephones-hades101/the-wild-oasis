import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

export default function AddCabin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen((show) => !show)}>
        {isOpen ? 'Close form' : 'Add new cabin'}
      </Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

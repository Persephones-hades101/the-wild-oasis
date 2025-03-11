import styled from 'styled-components';

import { useDeleteCabin } from './useDeleteCabin';

import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  const { isDeleting, deleteCabinMutate } = useDeleteCabin();

  const { isCreating, createCabinMutate } = useCreateCabin();

  function handleDuplicate() {
    createCabinMutate({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit-cabin-form">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="confirm-delete-cabin">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="edit-cabin-form">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Window name="confirm-delete-cabin">
            <ConfirmDelete
              resourceName={'cabins'}
              disabled={isDeleting}
              onConfirm={() => deleteCabinMutate(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

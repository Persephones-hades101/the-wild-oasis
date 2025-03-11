import styled from 'styled-components';

import { useCabins } from './useCabins';

import CabinRow from './CabinRow';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

export default function CabinTable() {
  const { cabins, isLoading, error } = useCabins();

  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

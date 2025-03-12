import styled from 'styled-components';

import { useCabins } from './useCabins';

import CabinRow from './CabinRow';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

export default function CabinTable() {
  const { cabins, isLoading, error } = useCabins();
  const [searchParams] = useSearchParams();
  const filterVal = searchParams.get('discount') || 'all';

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="cabins" />;

  // Filter
  let filteredCabins;
  if (filterVal === 'no-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  } else if (filterVal === 'with-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount !== 0);
  } else {
    filteredCabins = cabins;
  }

  // Sort
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => modifier * (a[field] - b[field]),
  );
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
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

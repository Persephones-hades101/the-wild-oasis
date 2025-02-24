import { useEffect } from 'react';
import { getCabin } from '../services/apiCabins';
import { useQuery } from '@tanstack/react-query';

import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';
import CabinTable from '../features/cabins/CabinTable';

function Cabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: getCabin,
  });

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable cabins={cabins} />
      </Row>
    </>
  );
}

export default Cabins;

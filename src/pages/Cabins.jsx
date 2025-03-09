import { useEffect, useState } from 'react';

import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';
import CabinTable from '../features/cabins/CabinTable';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';
import { useCabins } from '../features/cabins/useCabins';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  const { cabins, isLoading, error } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable cabins={cabins} />
        <Button onClick={() => setShowForm((show) => !show)}>
          {showForm ? 'Close form' : 'Add new cabin'}
        </Button>

        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;

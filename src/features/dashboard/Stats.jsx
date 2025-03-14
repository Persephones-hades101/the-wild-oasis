import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // bookings
  const numBookings = bookings.length;

  // sales
  const sales = bookings.reduce((acc, booking) => {
    return acc + booking.totalPrice;
  }, 0);

  // check ins
  const numCheckIns = confirmedStays.length;

  // occupancy rate
  const occupancyRate =
    confirmedStays.reduce((acc, stay) => acc + stay.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={numCheckIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={(occupancyRate * 100).toFixed(2) + '%'}
      />
    </>
  );
}

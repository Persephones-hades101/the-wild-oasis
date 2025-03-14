import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';

import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBookings() {
  const [searchParmas] = useSearchParams();
  const numDays = !searchParmas.get('last')
    ? 7
    : Number(searchParmas.get('last'));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: recentBookings } = useQuery({
    queryKey: ['recentBookings', numDays],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { isLoading, recentBookings };
}

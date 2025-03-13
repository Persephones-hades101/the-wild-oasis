import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // filter
  const filterVal = searchParams.get('status');
  const filter =
    !filterVal || filterVal === 'all'
      ? null
      : { filter: 'status', value: filterVal };

  //sortBy
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const { data: bookings, count } = data;

  // pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    const nextPage = page + 1;
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, nextPage],
      queryFn: () => getBookings({ filter, sortBy, page: nextPage }),
    });
  }
  if (page > 1) {
    const prevPage = page - 1;
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, prevPage],
      queryFn: () => getBookings({ filter, sortBy, page: prevPage }),
    });
  }
  return { isLoading, bookings, error, count };
}

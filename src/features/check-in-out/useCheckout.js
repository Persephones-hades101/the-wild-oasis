import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out successfully`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error('There was an error while checking out the booking');
    },
  });

  return { checkout, isCheckingout };
}

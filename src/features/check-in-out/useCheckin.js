import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useCheckin() {
  const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingin } = useMutation({
    mutationFn: () =>
      updateBooking(bookingId, { status: 'checked-in', isPaid: true }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },

    onError: () => {
      toast.error('There was an error while checking in the booking');
    },
  });

  return { checkin, isCheckingin };
}

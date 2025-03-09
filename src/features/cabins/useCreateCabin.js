import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createEditCabin } from '../../services/apiCabins';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabinMutate } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('Cabin created successfully');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createCabinMutate };
}

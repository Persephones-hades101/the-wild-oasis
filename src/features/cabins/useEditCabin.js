import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createEditCabin } from '../../services/apiCabins';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabinMutate } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabinMutate };
}

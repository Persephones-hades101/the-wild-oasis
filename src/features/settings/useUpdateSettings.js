import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting } from '../../services/apiSettings';

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSettingsMutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('Setting successfully updated');
      queryClient.invalidateQueries(['settings']);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateSettingsMutate };
}

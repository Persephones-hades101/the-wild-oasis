import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),

    onSuccess: () => {
      toast.success(
        "Account created successfully!Please verify the new account from the user's email address",
      );
      // navigate('/login', { replace: true });
      // console.log(user);
    },
  });

  return { signup, isLoading };
}

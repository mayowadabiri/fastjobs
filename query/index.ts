import { getData, getUser, login } from '@/apis';
import { useBearStore } from '@/state';
import { LoginForm, Person } from '@/types';
import { useRouter } from 'next/router';
import { UseQueryResult, useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

export const useLogin = () => {
  const router = useRouter();
  return useMutation(
    ({ username, password }: LoginForm) => login(username, password),
    {
      onError: (error) => {
        toast.error('Please check your username and password');
      },
      onSuccess: () => {
        router.push('/');
      },
    }
  );
};

export const useMe = () => {
  const updateUser = useBearStore((state) => state.updateUser);
  const router = useRouter();
  return useQuery(['me'], () => getUser(), {
    onSuccess: (data) => {
      updateUser(data);
    },
    onError: () => {
      router.push('/login');
    },
    retry: false,
  });
};

export const useGetData = (): UseQueryResult<Person[]> => {
  const router = useRouter();
  return useQuery(['data'], () => getData(), {
    onError: () => {
      router.push('/login');
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};

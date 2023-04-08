import { getData, getUser, login } from '@/apis';
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
  const router = useRouter();
  return useQuery(['me'], () => getUser(), {
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

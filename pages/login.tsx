import Image from 'next/image';

import Circles from '@/assets/circles.png';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Content from '@/components/Content';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useLogin } from '@/query';
import { LoginForm } from '@/types';

export default function Login() {
  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: '',
  });

  const { mutate, isLoading } = useLogin();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = evt;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    const { username, password } = form;
    if (username.trim() === '' || password.trim() === '') {
      return;
    }
    mutate({ username, password });
  };
  return (
    <div className="min-h-screen bg-primary flex relative">
      <div className="flex-1 flex">
        <Content />
        <div className="grow bg-black pt-52 pl-20 relative z-10">
          <div className="w-[320px]">
            <h3 className="heading text-white">For us to stay in touch</h3>
            <form
              className="mt-8 flex flex-col space-y-5"
              onSubmit={handleSumbit}
            >
              <Input
                label="Username"
                type="text"
                value={form.username}
                name="username"
                onChange={handleChange}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <Button type="submit">
                {isLoading ? 'Please wait' : 'Continue'}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute left-[750px] -z-1">
        <Image src={Circles} alt="circles" />
      </div>
    </div>
  );
}

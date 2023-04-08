export interface LoginForm {
  username: string;
  password: string;
}
type Gender = 'male' | 'female';

export type Person = {
  first_name: string;
  last_name: string;
  gender: Gender;
  email: string;
};

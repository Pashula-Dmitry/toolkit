export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export interface Users {
  isLoading: boolean;
  list: User[];
  errorMessage: string;
}

export type LoginUser = {
  email: string;
  password: string;
};

export type User = LoginUser & {
  id: string;
  userName: string;
  image: string;
  createdAt: number;
  updatedAt: number;
};

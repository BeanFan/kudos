// app/utils/types.server.ts
export type RegisterForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

// app/utils/types.server.ts

// ...

export type LoginForm = {
  email: string;
  password: string;
};

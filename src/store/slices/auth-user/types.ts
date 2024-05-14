export type User = {
  id: string;
  email: string | null;
};

export enum AuthStatus {
  loading = 'Loading',
  signedIn = 'SignedIn',
  signedOut = 'SignedOut',
}

export type AuthUserSlice = {
  user: User | null;
  authStatus: AuthStatus;
  userChecked: boolean;
  errors: {
    signIn?: string;
    signUp?: string;
  };
};

export type AuthPayload = {
  email: string;
  password: string;
};

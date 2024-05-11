export type User = {
  id: string;
  email: string;
};

export enum AuthStatus {
  loading = 'Loading',
  signedUp = 'SignedUp',
  signedIn = 'SignedIn',
  signedOut = 'SignedOut',
}

export type AuthUserlice = {
  user: User;
  authStatus: AuthStatus;
};

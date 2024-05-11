import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  User,
  UserCredential,
} from 'firebase/auth';

import { FirebaseConfig } from '../../../firebase-config';

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);

export const firebaseApi = {
  async signUp(email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(auth, email, password);
  },

  async signIn(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(auth, email, password);
  },

  async signOut(): Promise<void> {
    await signOut(auth);
  },

  async getUser(): Promise<User | null> {
    await auth.authStateReady();

    return auth.currentUser;
  },
};

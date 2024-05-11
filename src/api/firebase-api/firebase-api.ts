import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  User,
  UserCredential,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  type CollectionReference,
} from 'firebase/firestore';

import { FirebaseConfig } from '../../../firebase-config';
import type { Anime } from '../../types';

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

type AnimeWithDate = Anime & {
  addedAt: number;
};

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

  async addToFavorites(anime: Anime) {
    const favorites = getFavoritesCollection();

    const addedAt = Date.now();

    await addDoc(favorites, { ...anime, addedAt });
  },

  async removeFromFavorites(id: number) {
    const favorites = getFavoritesCollection();
    const { docs } = await getDocs(favorites);
    const docToRemove = docs.find((doc) => {
      const { malId } = doc.data();

      return malId === id;
    });

    if (docToRemove) {
      await deleteDoc(doc(db, favorites.path, docToRemove.id));
    }
  },

  async getFavorites() {
    const favorites = getFavoritesCollection();

    const { docs } = await getDocs(favorites);
    const animeList = docs.map((doc) => doc.data());

    return animeList.sort((a, b) => b.addedAt - a.addedAt);
  },
};

function getFavoritesCollection() {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error('User not found');
  }

  return collection(db, `${currentUser.uid}-favorites`) as CollectionReference<
    AnimeWithDate,
    AnimeWithDate
  >;
}

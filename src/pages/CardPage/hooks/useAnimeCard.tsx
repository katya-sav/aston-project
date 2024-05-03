import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, RootState } from '../../../store';
import { fetchAnimeCard } from '../../../store/slices/anime-card/slice';

export const useAnimeCard = (animeId: string | undefined) => {
  const dispatch = useAppDispatch();

  const animeCard = useSelector((state: RootState) => {
    return animeId ? state.animeCard.animeCard[animeId] : null;
  });

  useEffect(() => {
    dispatch(fetchAnimeCard(animeId));
  }, [dispatch, animeId]);

  return { animeCard };
};

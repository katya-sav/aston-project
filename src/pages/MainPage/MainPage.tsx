import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, RootState } from '../../store';
import { fetchAnime } from '../../store/slices/anime-list';

import { AnimeList } from '../../components/AnimeList';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const anime = useSelector((state: RootState) => {
    return state.anime.anime;
  });

  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch]);

  return (
    <div>
      <AnimeList anime={anime} />
    </div>
  );
};

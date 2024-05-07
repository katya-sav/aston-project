import { useState, useEffect } from 'react';

import { AnimeList } from '../../components/anime-list';
import { useGetAnimeListQuery } from '../../api/anime-api';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const { data: animeData, isFetching } = useGetAnimeListQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  if (!animeData) {
    return null;
  }

  return (
    <div>
      <AnimeList anime={animeData.data} />
    </div>
  );
};

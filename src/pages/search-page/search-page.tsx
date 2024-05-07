import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { AnimeList } from '../../components/anime-list';
import { useGetAnimeSearchQuery } from '../../api/anime-api';

export const SearchPage = () => {
  const { searchQuery } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') ?? '1');

  const { data: animeData, isFetching } = useGetAnimeSearchQuery({
    q: searchQuery,
    page,
  });

  useEffect(() => {
    const onScroll = () => {
      const hasNextPage = animeData?.pagination.hasNextPage;

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching && hasNextPage) {
        setSearchParams({ page: String(page + 1) });
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching, animeData, setSearchParams]);

  if (!animeData) {
    return null;
  }

  return (
    <div>
      <AnimeList searchQuery={searchQuery} anime={animeData.data} />
    </div>
  );
};

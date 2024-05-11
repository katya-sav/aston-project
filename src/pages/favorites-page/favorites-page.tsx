import { useFavorites } from '../../hooks';
import { AnimeList } from '../../components/anime-list';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <AnimeList searchQuery="Favorites" anime={favorites} />
    </div>
  );
};

import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { SuggestList } from '../suggest-list';
import { useDebounce } from '../../hooks';
import { useGetAnimeSearchQuery } from '../../api/anime-api';

import styles from './search-bar.module.css';

type Props = {
  onSubmit: (searchTerm: string) => void;
};

export const SearchBar = ({ onSubmit }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const navigate = useNavigate();

  const { data: anime } = useGetAnimeSearchQuery(
    {
      q: debouncedSearchTerm,
      page: 1,
    },
    { skip: debouncedSearchTerm.length < 3 },
  );

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(searchTerm);
    setSearchTerm('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const navigateToCard = useCallback(
    (id: number) => {
      navigate(`/card/${id}`, { replace: false });
    },
    [navigate],
  );

  const handleSuggestClick = useCallback(
    (id: number) => {
      navigateToCard(id);
      setSearchTerm('');
    },
    [navigateToCard],
  );

  const shouldShowSuggest = anime && debouncedSearchTerm;

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={searchTerm}
        placeholder="Search anime"
        onChange={handleChange}
      />
      {shouldShowSuggest && (
        <SuggestList
          anime={anime.data.slice(0, 5)}
          onClick={handleSuggestClick}
        />
      )}
    </form>
  );
};

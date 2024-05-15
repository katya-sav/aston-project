import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { SuggestList } from '../suggest-list';
import { useDebounce, useSearchHistory } from '../../hooks';
import { useGetAnimeSearchQuery } from '../../api/anime-api';
import { Button } from '../../shared/ui';

import styles from './search-bar.module.css';

type Props = {
  onSubmit: (searchTerm: string) => void;
};

export const SearchBar = ({ onSubmit }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const debouncedFocused = useDebounce(focused, 100);
  const navigate = useNavigate();
  const { addToHistory } = useSearchHistory();

  const { data: anime } = useGetAnimeSearchQuery(
    {
      q: debouncedSearchTerm,
      page: 1,
    },
    { skip: debouncedSearchTerm.length < 3 },
  );

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    onSubmit(searchTerm);
    addToHistory(searchTerm);
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

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const shouldShowSuggest = anime && debouncedSearchTerm && debouncedFocused;

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={searchTerm}
        placeholder="Search anime"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Button
        type="submit"
        className={styles.button}
        outline={false}
        icon={faMagnifyingGlass}
        iconSize="2xl"
        iconCn={styles.icon}
      ></Button>
      {shouldShowSuggest && (
        <SuggestList
          anime={anime.data.slice(0, 5)}
          onClick={handleSuggestClick}
        />
      )}
    </form>
  );
};

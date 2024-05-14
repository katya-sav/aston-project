import { useNavigate, createSearchParams } from 'react-router-dom';

import { Button } from '../../shared/ui';
import { SearchBar } from '../search-bar';
import { ButtonsPanel } from '../buttons-panel';

import styles from './header.module.css';

export const Header = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchQuery: string) => {
    navigate({
      pathname: `search/${searchQuery}`,
      search: `?${createSearchParams({ page: '1' })}`,
    });
  };

  const handleNavigate = () => {
    navigate(`/`, { replace: false });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Button
          size="xxl"
          weight={600}
          outline={false}
          className={styles.name}
          onClick={handleNavigate}
        >
          Anime
        </Button>
        <SearchBar onSubmit={handleSearchSubmit} />
      </div>
      <div className={styles.right}></div>
      <ButtonsPanel />
    </div>
  );
};

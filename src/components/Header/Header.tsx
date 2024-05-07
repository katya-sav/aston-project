import { useCallback } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../shared/ui';
import { SearchBar } from '../search-bar';

import styles from './header.module.css';

export const Header = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = useCallback(
    (searchQuery: string) => {
      navigate({
        pathname: `search/${searchQuery}`,
        search: `?${createSearchParams({ page: '1' })}`,
      });
    },
    [navigate],
  );

  const handleNavigate = useCallback(() => {
    navigate(`/`, { replace: false });
  }, [navigate]);

  return (
    <div className={styles.header}>
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
      <div className={styles.right}>
        <Button onClick={() => undefined} icon={faRightToBracket}>
          Login
        </Button>
        <Button icon={faUserPlus} onClick={() => undefined}>
          Register
        </Button>
      </div>
    </div>
  );
};

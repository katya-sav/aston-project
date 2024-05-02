import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../shared/ui';

import { SearchBar } from '../SearchBar';
import styles from './Header.module.css';

export const Header = () => {
  const navigate = useNavigate();

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
        <SearchBar />
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

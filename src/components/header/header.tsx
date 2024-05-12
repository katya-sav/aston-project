import { useCallback, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import {
  faRightToBracket,
  faHeart,
  faClockRotateLeft,
  faArrowLeft,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import { useAuthUser } from '../../hooks';
import { Button } from '../../shared/ui';
import { SearchBar } from '../search-bar';

import styles from './header.module.css';

export const Header = () => {
  const { signOutUser, authStatus, userChecked, getUser } = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, [getUser]);

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

  const handleNavigateToLogin = useCallback(() => {
    navigate(`/signin`, { replace: false });
  }, [navigate]);

  const handleNavigateToRegister = useCallback(() => {
    navigate(`/signup`, { replace: false });
  }, [navigate]);

  const handleNavigateToFavorites = useCallback(() => {
    navigate(`/favorites`, { replace: false });
  }, [navigate]);

  const handleNavigateToHistory = useCallback(() => {
    navigate(`/history`, { replace: false });
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
        {!userChecked ? null : authStatus === 'SignedIn' ? (
          <>
            <Button onClick={signOutUser} icon={faArrowLeft}>
              Logout
            </Button>
            <Button onClick={handleNavigateToFavorites} icon={faHeart}>
              Favorites
            </Button>

            <Button onClick={handleNavigateToHistory} icon={faClockRotateLeft}>
              History
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleNavigateToLogin} icon={faRightToBracket}>
              Login
            </Button>
            <Button icon={faUserPlus} onClick={handleNavigateToRegister}>
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

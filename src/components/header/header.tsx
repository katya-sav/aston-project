import { useCallback } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import {
  faRightToBracket,
  faHeart,
  faClockRotateLeft,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { useAuthUser } from '../../hooks';
import { Button } from '../../shared/ui';
import { SearchBar } from '../search-bar';

import styles from './header.module.css';

export const Header = () => {
  const user = useAuthUser();
  const { signOutUser } = useAuthUser();
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

  const handleNavigateToLogin = useCallback(() => {
    navigate(`/signin`, { replace: false });
  }, [navigate]);

  const handleNavigateToRegister = useCallback(() => {
    navigate(`/signup`, { replace: false });
  }, [navigate]);

  const handleLogout = () => {
    signOutUser();
    console.log(user.authStatus);

    navigate('/signin');
  };

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
        {user.authStatus === 'SignedIn' ? (
          <>
            <Button onClick={handleLogout} icon={faArrowLeft}>
              Logout
            </Button>
            <Button onClick={() => undefined} icon={faHeart}>
              Favorites
            </Button>

            <Button onClick={() => undefined} icon={faClockRotateLeft}>
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

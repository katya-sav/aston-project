import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  faRightToBracket,
  faHeart,
  faClockRotateLeft,
  faArrowLeft,
  faUserPlus,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

import { useAuthUser } from '../../hooks';
import { useTheme } from '../../shared/ui/theme';
import { Button } from '../../shared/ui';

import styles from './buttons-panel.module.css';

export const ButtonsPanel = () => {
  const { theme, toggleTheme } = useTheme();
  const { signOutUser, authStatus, userChecked, getUser } = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleNavigateToLogin = () => {
    navigate(`/signin`, { replace: false });
  };

  const handleNavigateToRegister = () => {
    navigate(`/signup`, { replace: false });
  };

  const handleNavigateToFavorites = () => {
    navigate(`/favorites`, { replace: false });
  };

  const handleNavigateToHistory = () => {
    navigate(`/history`, { replace: false });
  };

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={toggleTheme}
        icon={theme === 'light' ? faMoon : faSun}
        iconSize="xl"
        outline={false}
        className={styles.theme}
        iconCn={styles.icon}
      ></Button>
      {!userChecked ? null : authStatus === 'SignedIn' ? (
        <>
          <Button onClick={signOutUser} icon={faArrowLeft} iconCn={styles.icon}>
            Logout
          </Button>
          <Button
            onClick={handleNavigateToFavorites}
            icon={faHeart}
            iconCn={styles.icon}
          >
            Favorites
          </Button>
          <Button
            onClick={handleNavigateToHistory}
            icon={faClockRotateLeft}
            iconCn={styles.icon}
          >
            History
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={handleNavigateToLogin}
            icon={faRightToBracket}
            iconCn={styles.icon}
          >
            Login
          </Button>
          <Button
            icon={faUserPlus}
            onClick={handleNavigateToRegister}
            iconCn={styles.icon}
          >
            Register
          </Button>
        </>
      )}
    </div>
  );
};

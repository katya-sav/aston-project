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
    <>
      <Button
        onClick={toggleTheme}
        icon={theme === 'light' ? faMoon : faSun}
        iconSize="xl"
        outline={false}
        className={styles.theme}
      ></Button>
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
    </>
  );
};

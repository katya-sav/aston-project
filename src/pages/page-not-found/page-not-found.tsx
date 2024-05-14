import { useNavigate } from 'react-router-dom';

import image from '../../../public/error.png';
import { Button, Text } from '../../shared/ui';

import styles from './page-not-found.module.css';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/`, { replace: false });
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt="error" />
      <Text size="xl" weight={600} className={styles.title}>
        Page Not Found
      </Text>
      <Text className={styles.text}>You can return to the Homepage</Text>
      <Button onClick={handleNavigate} weight={600}>
        Home
      </Button>
    </div>
  );
};

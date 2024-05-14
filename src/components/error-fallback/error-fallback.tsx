import { FallbackProps } from 'react-error-boundary';

import image from '../../../public/error.png';
import { Button, Text } from '../../shared/ui';

import styles from './error-fallback.module.css';

export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className={styles.wrapper}>
      <Text size="xl" weight={600} className={styles.text}>
        Oops..
      </Text>
      <Text size="l" weight={500}>
        Something went wrong
      </Text>
      <img className={styles.image} src={image} alt="error" />
      <Button onClick={resetErrorBoundary} weight={600}>
        Home
      </Button>
    </div>
  );
};

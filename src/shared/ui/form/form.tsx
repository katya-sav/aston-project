import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './form.module.css';
import { Text, TextProps } from '../text';

type Props = PropsWithChildren<
  {
    className?: string;
    title: string;
    buttonName: string;
    onSubmit: () => void;
  } & TextProps
>;

export const Form = ({ className, children, title, onSubmit }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={cn(styles.form, className)}>
        <Text size="xl" weight={600} className={styles.title}>
          {title}
        </Text>
        {children}
      </form>
    </div>
  );
};

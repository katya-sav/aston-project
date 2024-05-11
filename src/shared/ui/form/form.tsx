import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './form.module.css';
import { Text, TextProps } from '../text';

type Props = PropsWithChildren<
  {
    className?: string;
    title: string;
    buttonName: string;
  } & TextProps
>;

export const Form = ({ className, children, title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <form className={cn(styles.form, className)}>
        <Text size="xl" weight={600} className={styles.title}>
          {title}
        </Text>
        {children}
      </form>
    </div>
  );
};

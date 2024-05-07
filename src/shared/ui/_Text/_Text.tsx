import { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './text.module.css';

export type Props = PropsWithChildren<{
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
  weight?: 400 | 500 | 600;
  block?: boolean;
  className?: string;
}>;

export const Text = ({
  size = 'm',
  weight = 400,
  block = false,
  className,
  children,
}: Props) => {
  const sizeClassName = styles[`size-${size}`];
  const weightClassName = styles[`weight-${weight}`];

  return (
    <span
      className={cn(
        styles.base,
        sizeClassName,
        weightClassName,
        block && styles.block,
        className,
      )}
    >
      {children}
    </span>
  );
};

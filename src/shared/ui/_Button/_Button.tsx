import type { PropsWithChildren } from 'react';
import cn from 'classnames';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { Icon } from '../icon';
import { Text, TextProps } from '../text';

import styles from './button.module.css';

type Props = PropsWithChildren<
  {
    icon?: FontAwesomeIconProps['icon'];
    outline?: boolean;
    className?: string;
    onClick: () => void;
  } & TextProps
>;

export const Button = ({
  icon,
  outline = true,
  className,
  onClick,
  children,
  ...textProps
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, outline && styles.outline, className)}
    >
      <Text {...textProps}>{children}</Text>
      {icon && <Icon icon={icon} className={styles.icon} />}
    </button>
  );
};

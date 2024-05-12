import type { PropsWithChildren } from 'react';
import cn from 'classnames';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { Icon } from '../icon';
import { Text, TextProps } from '../text';

import styles from './button.module.css';

export type Props = PropsWithChildren<
  {
    icon?: FontAwesomeIconProps['icon'];
    outline?: boolean;
    className?: string;
    iconCn?: string;
    type?: 'submit' | 'button';
    iconSize?: FontAwesomeIconProps['size'];
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  } & TextProps
>;

export const Button = ({
  icon,
  outline = true,
  className,
  iconCn,
  iconSize,
  onClick,
  type = 'button',
  children,
  ...textProps
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(styles.button, outline && styles.outline, className)}
    >
      <Text {...textProps}>{children}</Text>
      {icon && (
        <Icon icon={icon} size={iconSize} className={cn(styles.icon, iconCn)} />
      )}
    </button>
  );
};

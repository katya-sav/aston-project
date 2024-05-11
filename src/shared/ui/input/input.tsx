import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Text, TextProps } from '../text';
import styles from './input.module.css';

type Props = PropsWithChildren<
  {
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    type?: string;
    name?: string;
    id?: string;
    required: boolean;
    placeholder: string;
    className?: string;
  } & TextProps
>;

export const Input = ({
  label,
  onChange,
  className,
  type,
  name,
  id,
  required,
  placeholder,
  ...textProps
}: Props) => {
  return (
    <>
      <Text {...textProps} size="l">
        {label}
      </Text>
      <input
        className={cn(styles.input, className)}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
      ></input>
    </>
  );
};

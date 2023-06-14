import React, { type InputHTMLAttributes, memo, useRef, useState, useEffect } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const {
    className,
    onChange,
    type = 'text',
    placeholder,
    readOnly,
    autofocus,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.readonly]: readOnly,
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <input
        ref={ref}
        type={type}
        className={cls.input}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...otherProps}
      />
    </div>
  );
});

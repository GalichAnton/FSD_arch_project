import React, { type InputHTMLAttributes, memo } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
  const { className, onChange, type = 'text', placeholder, readOnly, ...otherProps } = props;

  const mods: Mods = {
    [cls.readonly]: readOnly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <input
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

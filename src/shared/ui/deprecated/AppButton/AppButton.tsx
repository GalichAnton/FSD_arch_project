import React, { memo, type ReactNode, type ButtonHTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppButton.module.scss';

export enum AppButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum AppButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: AppButtonVariant;
  square?: boolean;
  size?: AppButtonSize;
  children?: ReactNode;
  fullWidth?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const AppButton = memo((props: AppButtonProps) => {
  const {
    className,
    children,
    square,
    variant = AppButtonVariant.OUTLINE,
    disabled,
    size = AppButtonSize.M,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      className={classNames(cls.appButton, mods, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});

AppButton.displayName = 'AppButton';

import React, { memo, type ReactNode, type ButtonHTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppButton.module.scss';

export type AppButtonVariant = 'clear' | 'outline';

export type AppButtonSize = 'm' | 'l' | 'xl';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  variant?: AppButtonVariant;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: AppButtonSize;
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean;
  /**
   * Содержимое кнопки
   */
  children?: ReactNode;
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean;
}

export const AppButton = memo((props: AppButtonProps) => {
  const {
    className,
    children,
    square,
    variant = 'outline',
    disabled,
    size = 'm',
    fullWidth,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      className={classNames(cls.appButton, mods, [className, cls[variant], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});

AppButton.displayName = 'AppButton';

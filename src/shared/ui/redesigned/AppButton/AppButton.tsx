import React, {
  type ReactNode,
  type ButtonHTMLAttributes,
  forwardRef,
  type ForwardedRef,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppButton.module.scss';

export type AppButtonVariant = 'clear' | 'outline' | 'filled';

export type AppButtonColor = 'normal' | 'success' | 'error';

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

  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const AppButton = forwardRef(
  (props: AppButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      square,
      variant = 'outline',
      disabled,
      size = 'm',
      fullWidth,
      addonLeft,
      addonRight,
      color = 'normal',
      ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
      [cls.square]: square,
      [cls.disabled]: disabled,
      [cls.fullWidth]: fullWidth,
      [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
      <button
        className={classNames(cls.appButton, mods, [
          className,
          cls[variant],
          cls[size],
          cls[color],
        ])}
        ref={ref}
        {...otherProps}
      >
        <div className={cls.addonLeft}>{addonLeft}</div>
        {children}
        <div className={cls.addonRight}>{addonRight}</div>
      </button>
    );
  },
);

AppButton.displayName = 'AppButton';

import React, { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

export enum AppButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum AppButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: AppButtonVariant
  square?: boolean
  size?: AppButtonSize
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    square,
    variant,
    size = AppButtonSize.M,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
  }

  return (
    <button className={classNames(cls.appButton, mods, [className, cls[variant]])} {...otherProps}>
      {children}
    </button>
  )
}

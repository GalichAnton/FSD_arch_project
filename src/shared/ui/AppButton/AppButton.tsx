import React, { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

export enum AppButtonVariant {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: AppButtonVariant
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    variant,
    ...otherProps
  } = props

  return (
    <button className={classNames(cls.appButton, {}, [className, cls[variant]])} {...otherProps}>
      {children}
    </button>
  )
}

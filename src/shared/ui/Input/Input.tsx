import { classNames } from 'shared/lib/classNames/classNames'
import React, {
  type InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react'
import cls from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    placeholder,
    ...otherProps
  } = props

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
        {placeholder && (
            <div className={cls.placeholder}>
                {`${placeholder}>`}
            </div>
        )}
          <input
              type={type}
              className={cls.input}
              {...otherProps}
          />
    </div>
  )
})

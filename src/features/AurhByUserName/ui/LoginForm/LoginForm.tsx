import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <form className={classNames(cls.loginForm, {}, [className])}>
      <Input type="text" placeholder={t('логин')} className={cls.input} autoFocus={true}/>
      <Input type="password" placeholder={t('пароль')} className={cls.input} />
      <AppButton type="submit" variant={AppButtonVariant.OUTLINE} className={cls.loginBtn}>
        {t('Войти')}
      </AppButton>
    </form>
  )
}

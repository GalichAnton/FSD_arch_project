import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import React, { type ChangeEvent, useCallback, type FC, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState)

  const onChangeUsername = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(e.target.value))
  }, [dispatch])

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(e.target.value))
  }, [dispatch])

  const onLoginClick = useCallback((e: FormEvent) => {
    e.preventDefault()
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <form className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
        <Input
            autoFocus
            type="text"
            className={cls.input}
            placeholder={t('Введите username')}
            onChange={onChangeUsername}
            value={username}
        />
        <Input
            type="text"
            className={cls.input}
            placeholder={t('Введите пароль')}
            onChange={onChangePassword}
            value={password}
        />
        <AppButton
            variant={AppButtonVariant.OUTLINE}
            className={cls.loginBtn}
            onClick={onLoginClick}
            disabled={isLoading}
        >
            {t('Войти')}
        </AppButton>
    </form>
  )
}

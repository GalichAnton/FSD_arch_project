import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import React, { type ChangeEvent, useCallback, type FC, type FormEvent, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../../model/selectors/getLoginState/getLoginState'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

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
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  )
}

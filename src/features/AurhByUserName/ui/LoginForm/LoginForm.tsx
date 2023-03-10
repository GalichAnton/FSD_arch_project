import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import React, { type ChangeEvent, useCallback, type FC, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
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
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, onSuccess } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <form className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('?????????? ??????????????????????')} />
              {error && <Text text={t('???? ?????????? ???????????????? ?????????? ?????? ????????????')} theme={TextTheme.ERROR} />}
          <Input
              autoFocus
              type="text"
              className={cls.input}
              placeholder={t('?????????????? username')}
              onChange={onChangeUsername}
              value={username}
          />
          <Input
              type="text"
              className={cls.input}
              placeholder={t('?????????????? ????????????')}
              onChange={onChangePassword}
              value={password}
          />
          <AppButton
              variant={AppButtonVariant.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
          >
              {t('??????????')}
          </AppButton>
      </form>
    </DynamicModuleLoader>
  )
}

import { useCallback, type FC, type FormEvent } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant,
} from '@/shared/ui/deprecated/AppButton';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppButton } from '@/shared/ui/redesigned/AppButton';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    },
    [dispatch, password, username],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack gap="16" className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} variant="error" />}
            <Input
              autofocus
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
            <AppButton className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
              {t('Войти')}
            </AppButton>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('Форма авторизации')} />
            {error && (
              <TextDeprecated
                text={t('Вы ввели неверный логин или пароль')}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              autofocus
              type="text"
              className={cls.input}
              placeholder={t('Введите username')}
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t('Введите пароль')}
              onChange={onChangePassword}
              value={password}
            />
            <AppButtonDeprecated
              variant={AppButtonVariant.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Войти')}
            </AppButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
};

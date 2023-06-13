import React, { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton } from '@/shared/ui/depricated/AppButton';

import cls from './ErrorComponent.module.scss';

interface ErrorComponentProps {
  className?: string;
}

export const ErrorComponent: FC<ErrorComponentProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.errorComponent, {}, [className])}>
      <h1>{t('Произошла непредвиденная ошибка')}</h1>
      <AppButton onClick={reloadPage}>{t('Обновить страницу')}</AppButton>
    </div>
  );
};

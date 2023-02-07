import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {AppButton, AppButtonVariant} from "shared/ui/AppButton/AppButton";


interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher:FC<LanguageSwitcherProps> = (props) => {
  const {className} = props;
  const {t, i18n} = useTranslation()

  return (
      <AppButton variant={AppButtonVariant.CLEAR} className={classNames(cls.languageSwitcher,{}, [className])} onClick={
        () => i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru')
      }>
        {t('Язык')}
      </AppButton>
  )

};

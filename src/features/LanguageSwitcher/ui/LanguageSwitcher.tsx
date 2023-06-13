import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant,
} from '@/shared/ui/depricated/AppButton';
import { AppButton } from '@/shared/ui/redisigned/AppButton';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<AppButton variant="clear">{t(short ? 'Короткий язык' : 'Язык')}</AppButton>}
      off={
        <AppButtonDeprecated
          variant={AppButtonVariant.CLEAR}
          className={classNames('', {}, [className])}
          onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
        >
          {t(short ? 'Короткй язык' : 'Язык')}
        </AppButtonDeprecated>
      }
    />
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';

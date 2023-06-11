import React, { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entity/User';
import { LoginModal } from '@/features/AurhByUserName';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAutoModalOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAutoModalOpen(true);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <Text className={cls.appName} title={t('Ulbi TV App')} theme={TextTheme.INVERTED} />
            <AppLink to={getRouteArticleCreate()} variant={AppLinkVariant.SECONDARY} className={cls.createBtn}>
              {t('Создать статью')}
            </AppLink>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <AppButton className={cls.links} variant={AppButtonVariant.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('Войти')}
      </AppButton>

      {isAutoModalOpen && <LoginModal isOpen={isAutoModalOpen} onClose={onCloseModal} />}
    </nav>
  );
});

Navbar.displayName = 'Navbar';

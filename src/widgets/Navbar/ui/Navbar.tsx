
import React, { memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton/AppButton'
import { LoginModal } from '@/features/AurhByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entity/User'
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { RoutePath } from '@/shared/const/router'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAutoModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAutoModalOpen(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (authData) {
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
          <Text
            className={cls.appName}
            title={t('FSD App')}
            theme={TextTheme.INVERTED}
          />
          <AppLink
            to={RoutePath.ARTICLE_DETAILS}
            variant={AppLinkVariant.SECONDARY}
            className={cls.createBtn}
          >
            {t('Создать статью')}
          </AppLink>
          <HStack gap="16" className={cls.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>

        </header>
    )
  }

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <AppButton className={cls.links} variant={AppButtonVariant.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('Войти')}
      </AppButton>

     {isAutoModalOpen && <LoginModal isOpen={isAutoModalOpen} onClose={onCloseModal}/>}
    </nav>
  )
})

Navbar.displayName = 'Navbar'

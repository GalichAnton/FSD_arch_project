/* eslint-disable i18next/no-literal-string */
import { AppRoutes } from 'shared/config/routerConfig/routeConfig'
import React, { useCallback, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false)

  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAutoModalOpen(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppButton className={cls.links} variant={AppButtonVariant.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('Войти')}
      </AppButton>

      <Modal onClose={onToggleModal} isOpen={isAutoModalOpen}>
        {t('Модалка')}
      </Modal>
    </div>
  )
}

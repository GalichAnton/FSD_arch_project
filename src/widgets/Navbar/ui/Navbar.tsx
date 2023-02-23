
import React, { useCallback, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { LoginModal } from 'features/AurhByUserName'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false)

  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAutoModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAutoModalOpen(true)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppButton className={cls.links} variant={AppButtonVariant.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('Войти')}
      </AppButton>

      <LoginModal isOpen={isAutoModalOpen} onClose={onCloseModal}/>
    </div>
  )
}

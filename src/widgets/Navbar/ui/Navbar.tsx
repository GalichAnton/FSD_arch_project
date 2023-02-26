
import React, { useCallback, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { LoginModal } from 'features/AurhByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entity/User'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

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

  if (authData) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppButton
                variant={AppButtonVariant.CLEAR_INVERTED}
                className={cls.links}
                onClick={onLogout}
            >
                {t('Выйти')}
            </AppButton>
        </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppButton className={cls.links} variant={AppButtonVariant.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('Войти')}
      </AppButton>

     {isAutoModalOpen && <LoginModal isOpen={isAutoModalOpen} onClose={onCloseModal}/>}
    </div>
  )
}

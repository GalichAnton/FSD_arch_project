import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { Icon } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entity/Notification'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice'
import { Drawer } from 'shared/ui/Drawer/Drawer'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useDevice()

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <AppButton onClick={onOpenDrawer} variant={AppButtonVariant.CLEAR}>
        <Icon Svg={NotificationIcon} inverted />
    </AppButton>
  )

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
        </Drawer>
      </>
    )
  } else {
    return (
      <Popover
        className={classNames(cls.NotificationButton, {}, [className])}
        direction="bottom left"
        trigger={(
            <AppButton variant={AppButtonVariant.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </AppButton>
        )}
        >
          <NotificationList className={cls.notifications} />
      </Popover>
    )
  }
})

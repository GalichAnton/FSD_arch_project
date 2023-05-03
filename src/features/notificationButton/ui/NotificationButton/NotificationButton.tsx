import { classNames } from 'shared/lib/classNames/classNames'
import React, { memo } from 'react'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { Icon } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entity/Notification'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

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
})

import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entity/Notification';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useDevice();

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <AppButton onClick={onOpenDrawer} variant={AppButtonVariant.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </AppButton>
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    );
  } else {
    return (
      <Popover
        className={classNames(cls.NotificationButton, {}, [className])}
        direction="bottom left"
        trigger={
          <AppButton variant={AppButtonVariant.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
          </AppButton>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    );
  }
});

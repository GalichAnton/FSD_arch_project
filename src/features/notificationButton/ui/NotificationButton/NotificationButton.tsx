import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entity/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant,
} from '@/shared/ui/depricated/AppButton';
import { Drawer } from '@/shared/ui/depricated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/depricated/Popups';
import { Icon } from '@/shared/ui/redisigned/Icon';
import { Popover } from '@/shared/ui/redisigned/Popups';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />}
      off={
        <AppButtonDeprecated onClick={onOpenDrawer} variant={AppButtonVariant.CLEAR}>
          <IconDeprecated Svg={NotificationIconDeprecated} inverted />
        </AppButtonDeprecated>
      }
    />
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        }
        off={
          <PopoverDeprecated
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </PopoverDeprecated>
        }
      />
    );
  }
});

import React, { useState, useMemo, memo } from 'react';

import { useSelector } from 'react-redux';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppButton, AppButtonSize, AppButtonVariant } from '@/shared/ui/depricated/AppButton';
import { AppLogo } from '@/shared/ui/redisigned/AppLogo';
import { Icon } from '@/shared/ui/redisigned/Icon';
import { VStack } from '@/shared/ui/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}
        >
          <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
          <VStack gap="8" className={cls.items}>
            {itemsList}
          </VStack>
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            Svg={ArrowIcon}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher short={collapsed} className={cls.lang} />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
          <AppButton
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            variant={AppButtonVariant.BACKGROUND_INVERTED}
            size={AppButtonSize.L}
            square
          >
            {collapsed ? '>' : '<'}
          </AppButton>
          <VStack gap="8" className={cls.items}>
            {itemsList}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher short={collapsed} className={cls.lang} />
          </div>
        </aside>
      }
    />
  );
});

SideBar.displayName = 'SideBar';

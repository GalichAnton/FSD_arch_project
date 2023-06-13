import React, { useState, useMemo, memo } from 'react';

import { useSelector } from 'react-redux';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';
import { AppButton, AppButtonSize, AppButtonVariant } from '@/shared/ui/depricated/AppButton';
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
    () => sidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
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
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
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

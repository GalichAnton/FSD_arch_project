import React, { memo, type ReactNode } from 'react';

import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { className, children, variant = AppLinkVariant.PRIMARY, to, ...otherProps } = props;

  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[variant]])} {...otherProps}>
      {children}
    </Link>
  );
});

AppLink.displayName = 'AppLink';

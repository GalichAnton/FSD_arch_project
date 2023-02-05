import {AppRoutes} from "shared/config/routerConfig/routeConfig";
import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkVariant} from "shared/ui/AppLink/AppLink";


interface NavbarProps {
  className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
  const {className} = props;

  return (
    <div className={classNames(cls.navbar,{}, [className])}>
      <div className={cls.links}>
        <AppLink  to={AppRoutes.MAIN} className={cls.mainLink}>Main</AppLink>
        <AppLink variant={AppLinkVariant.SECONDARY} to={AppRoutes.ABOUT}>About</AppLink>
      </div>
    </div>
  );
};




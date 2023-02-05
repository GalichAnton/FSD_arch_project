import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {AppRoutes} from "shared/config/routerConfig/routeConfig";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={AppRoutes.MAIN}>Main</Link>
      <Link to={AppRoutes.ABOUT}>About</Link>
      <AppRouter/>
    </div>
  );
};

export default App;

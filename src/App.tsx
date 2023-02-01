import React, {Suspense, useContext, useEffect} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route path="/about" element={<Suspense fallback={<div>Loading About...</div>}><AboutPageAsync/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={<div>Loading Main...</div>}><MainPageAsync/></Suspense>}/>
      </Routes>
    </div>
  );
};

export default App;

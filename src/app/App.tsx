import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route path="/about" element={<Suspense fallback={<div>Loading About...</div>}><AboutPage/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={<div>Loading Main...</div>}><MainPage/></Suspense>}/>
      </Routes>
    </div>
  );
};

export default App;

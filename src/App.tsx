import React, {Suspense} from 'react';
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./components/pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./components/pages/MainPage/MainPage.async";

const App = () => {
  return (
    <div className="app">
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

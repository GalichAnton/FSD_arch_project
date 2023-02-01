import {lazy} from "react";

export const MainPageAsync =  lazy(() => import(/* webpackChunkName: "MainPageAsync"*/'./MainPage').then(module=>({default:module.MainPage})));
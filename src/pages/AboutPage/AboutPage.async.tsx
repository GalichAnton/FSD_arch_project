import {lazy} from "react";

export const AboutPageAsync =  lazy(() => import(/* webpackChunkName: "AboutPageAsync"*/'./AboutPage').then(module=>({default:module.AboutPage})));
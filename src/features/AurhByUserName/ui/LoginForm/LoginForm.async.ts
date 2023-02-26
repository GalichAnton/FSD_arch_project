import { lazy } from 'react'

export const LoginFormAsync = lazy(async () => await import(/* webpackChunkName: "LoginFormAsync" */'./LoginForm')
  .then(module => ({ default: module.LoginForm })))

import React, { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { useTheme } from './providers/ThemeProvider'
import { useDispatch } from 'react-redux'
import { userActions } from 'entity/User'

const App = () => {
  const { theme } = useTheme()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar/>
        <div className={'content-page'}>
          <SideBar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App

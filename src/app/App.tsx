import React, { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [])}>
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

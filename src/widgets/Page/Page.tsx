import { classNames } from 'shared/lib/classNames/classNames'
import {
  memo, type ReactNode, useRef,
  type UIEvent,
} from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.scss'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getUIScrollByPath, uiActions } from 'features/UI'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef<HTMLDivElement>()
  const triggerRef = useRef<HTMLDivElement>()
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector(
    (state: StateSchema) => getUIScrollByPath(state, pathname),
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }))
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
})

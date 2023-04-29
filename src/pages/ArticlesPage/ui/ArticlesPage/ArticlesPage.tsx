import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './ArticlesPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  articlesPageReducer,
} from '../../model/slices/articlesPageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

export const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeOnUnmount={false}>
        <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
          <ArticlesPageFilters />
          <ArticleInfiniteList className={cls.list} />
        </Page>
      </DynamicModuleLoader>
  )
})

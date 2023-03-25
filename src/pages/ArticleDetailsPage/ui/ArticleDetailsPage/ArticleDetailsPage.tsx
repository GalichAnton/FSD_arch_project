import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Text } from 'shared/ui/Text/Text'
import cls from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleDetails } from 'entity/Article'
import { CommentList } from 'entity/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { RoutePath } from 'shared/config/routerConfig/routeConfig'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { Page } from 'shared/ui/Page/Page'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const navigate = useNavigate()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  const onBackToList = useCallback(() => {
    navigate(RoutePath.ARTICLES)
  }, [navigate])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  if (!id) {
    return (
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
              {t('Статья не найдена')}
          </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <AppButton variant={AppButtonVariant.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </AppButton>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment}/>
        <CommentList
            isLoading={commentsIsLoading}
            comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  )
})

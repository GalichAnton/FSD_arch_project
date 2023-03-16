import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import cls from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleDetails } from 'entity/Article'
import { CommentList } from 'entity/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

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

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
          <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
              {t('Статья не найдена')}
          </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <ArticleDetails id={id} />
          <Text className={cls.commentTitle} title={t('Комментарии')} />
          <CommentList
              isLoading={commentsIsLoading}
              comments={comments}
          />
      </div>
    </DynamicModuleLoader>
  )
})

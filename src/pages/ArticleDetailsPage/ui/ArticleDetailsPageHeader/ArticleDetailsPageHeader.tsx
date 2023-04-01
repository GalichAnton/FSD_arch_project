import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/routeConfig'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entity/Article/model/selectors/articleDetails'
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.ARTICLES)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.ARTICLE_DETAILS}${article?.id}/edit`)
  }, [article?.id, navigate])

  return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <AppButton variant={AppButtonVariant.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </AppButton>
            {canEdit && (
              <AppButton
                className={cls.editBtn}
                variant={AppButtonVariant.OUTLINE}
                onClick={onEditArticle}
              >
                  {t('Редактировать')}
              </AppButton>
            )}
        </div>
  )
})

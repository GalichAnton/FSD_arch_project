import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entity/Article'
import { getCanEditArticle } from '../../model/selectors/article'
import { HStack } from '@/shared/ui/Stack'
import { RoutePath } from '@/shared/const/router'

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
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <AppButton variant={AppButtonVariant.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </AppButton>
            {canEdit && (
              <AppButton
                variant={AppButtonVariant.OUTLINE}
                onClick={onEditArticle}
              >
                  {t('Редактировать')}
              </AppButton>
            )}
        </HStack>
  )
})

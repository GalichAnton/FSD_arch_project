import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entity/Article';
import { getRouteArticleDetails, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton, AppButtonVariant } from '@/shared/ui/depricated/AppButton';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${getRouteArticleDetails(article?.id)}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <AppButton variant={AppButtonVariant.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </AppButton>
      {canEdit && (
        <AppButton variant={AppButtonVariant.OUTLINE} onClick={onEditArticle}>
          {t('Редактировать')}
        </AppButton>
      )}
    </HStack>
  );
});

import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entity/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { type TabItem, Tabs as TabsDeprecated } from '@/shared/ui/depricated/Tabs';
import { Tabs } from '@/shared/ui/redisigned/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('Все статьи'),
      },
      {
        value: ArticleType.IT,
        content: t('Айти'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука'),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          direction="column"
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
      off={
        <TabsDeprecated
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
    />
  );
});

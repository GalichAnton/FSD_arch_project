import { memo } from 'react';

import { ArticleView } from '@/entity/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant,
} from '@/shared/ui/depricated/AppButton';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Card } from '@/shared/ui/redisigned/Card';
import { Icon } from '@/shared/ui/redisigned/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
          border="round"
        >
          <HStack gap="8">
            {viewTypes.map((viewType) => (
              <Icon
                key={viewType.view}
                clickable
                onClick={onClick(viewType.view)}
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <AppButtonDeprecated
              key={viewType.view}
              variant={AppButtonVariant.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            </AppButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});

import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { type User } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton } from '@/shared/ui/redesigned/AppButton';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './ArticleAdditionalInfo.module.scss';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
  const { className, author, createdAt, views, onEdit } = props;
  const { t } = useTranslation();

  return (
    <VStack gap="32" className={classNames(cls.ArticleAdditionalInfo, {}, [className])}>
      <HStack gap="8">
        <Avatar src={author.avatar} size={32} />
        <Text text={author.username} bold />
        <Text text={createdAt} />
      </HStack>
      <AppButton onClick={onEdit}>{t('Редактировать')}</AppButton>
      <Text text={t('{{count}} просмотров', { count: views })} />
    </VStack>
  );
});

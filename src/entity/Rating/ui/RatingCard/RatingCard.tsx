import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
  AppButton as AppButtonDeprecated,
  AppButtonSize,
  AppButtonVariant,
} from '@/shared/ui/deprecated/AppButton';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDepreacetd } from '@/shared/ui/deprecated/Text';
import { AppButton } from '@/shared/ui/redesigned/AppButton';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, onAccept, feedbackTitle, hasFeedback, onCancel, title, rate = 0 } = props;
  const { t } = useTranslation();
  const isMobile = useDevice();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      }
      off={
        <>
          <TextDepreacetd title={feedbackTitle} />
          <InputDeprecated
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align="center" gap="8" max>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={starsCount ? t('Спасибо за оценку!') : title} />}
          off={<TextDepreacetd title={starsCount ? t('Спасибо за оценку!') : title} />}
        />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      {!isMobile ? (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <HStack max gap="16" justify="end">
                  <AppButton data-testid="RatingCard.Close" onClick={cancelHandle}>
                    {t('Закрыть')}
                  </AppButton>
                  <AppButton data-testid="RatingCard.Send" onClick={acceptHandle}>
                    {t('Отправить')}
                  </AppButton>
                </HStack>
              }
              off={
                <HStack max gap="16" justify="end">
                  <AppButtonDeprecated
                    data-testid="RatingCard.Close"
                    onClick={cancelHandle}
                    variant={AppButtonVariant.OUTLINE_RED}
                  >
                    {t('Закрыть')}
                  </AppButtonDeprecated>
                  <AppButtonDeprecated data-testid="RatingCard.Send" onClick={acceptHandle}>
                    {t('Отправить')}
                  </AppButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      ) : (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <AppButton fullWidth onClick={acceptHandle} size="l">
                  {t('Отправить')}
                </AppButton>
              }
              off={
                <AppButtonDeprecated fullWidth onClick={acceptHandle} size={AppButtonSize.L}>
                  {t('Отправить')}
                </AppButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      )}
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card max border="round" padding="24">
          {content}
        </Card>
      }
      off={
        <CardDeprecated className={className} max data-testid="RatingCard">
          {content}
        </CardDeprecated>
      }
    />
  );
});

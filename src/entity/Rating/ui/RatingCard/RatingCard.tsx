import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Card } from '@/shared/ui/Card';
import { AppButton, AppButtonSize, AppButtonVariant } from '@/shared/ui/depricated/AppButton';
import { StarRating } from '@/shared/ui/depricated/StarRating';
import { Text } from '@/shared/ui/depricated/Text';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
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
    <>
      <Text title={feedbackTitle} />
      <Input data-testid="RatingCard.Input" value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
    </>
  );

  return (
    <Card max className={className} data-testid="RatingCard">
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <AppButton fullWidth onClick={acceptHandle} size={AppButtonSize.L}>
              {t('Отправить')}
            </AppButton>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <AppButton onClick={cancelHandle} variant={AppButtonVariant.OUTLINE_RED} data-testid="RatingCard.Close">
                {t('Закрыть')}
              </AppButton>
              <AppButton onClick={acceptHandle} data-testid="RatingCard.Send">
                {t('Отправить')}
              </AppButton>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
});

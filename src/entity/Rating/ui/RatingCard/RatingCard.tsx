import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { AppButton, AppButtonSize, AppButtonVariant } from '@/shared/ui/AppButton/AppButton'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
  } = props
  const { t } = useTranslation()
  const isMobile = useDevice()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const modalContent = (
        <>
          <Text
              title={feedbackTitle}
          />
          <Input
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Ваш отзыв')}
          />
        </>
  )

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      {isMobile
        ? <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap="32">
              {modalContent}
              <AppButton fullWidth onClick={acceptHandle} size={AppButtonSize.L}>
                  {t('Отправить')}
              </AppButton>
            </VStack>
          </Drawer>
        : <Modal isOpen={isModalOpen} lazy>
            <VStack max gap="32">
                {modalContent}
                <HStack max gap="16" justify="end">
                  <AppButton onClick={cancelHandle} variant={AppButtonVariant.OUTLINE_RED}>
                      {t('Закрыть')}
                  </AppButton>
                  <AppButton onClick={acceptHandle}>
                      {t('Отправить')}
                  </AppButton>
                </HStack>
            </VStack>
          </Modal>}
    </Card>
  )
})
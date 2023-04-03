import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entity/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entity/User'
import { HStack } from 'shared/ui/Stack'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation('profile')

  const readonly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack justify='between' max>
      <Text title={t('Профиль')} />
      {canEdit && (
         <>
      {readonly
        ? (
            <AppButton
                variant={AppButtonVariant.OUTLINE}
                onClick={onEdit}
            >
                {t('Редактировать')}
            </AppButton>
          )
        : (
            <HStack gap='8'>
              <AppButton
                  variant={AppButtonVariant.OUTLINE_RED}
                  onClick={onCancelEdit}
              >
                  {t('Отменить')}
              </AppButton>
              <AppButton
                  variant={AppButtonVariant.OUTLINE}
                  onClick={onSave}
              >
                  {t('Сохранить')}
              </AppButton>
            </HStack>
          )}
          </>
      )}
    </HStack>
  )
}

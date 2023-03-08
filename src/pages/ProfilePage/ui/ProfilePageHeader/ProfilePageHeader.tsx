import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entity/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation('profile')

  const readonly = useSelector(getProfileReadonly)
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
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
            <AppButton
                className={cls.editBtn}
                variant={AppButtonVariant.OUTLINE}
                onClick={onEdit}
            >
                {t('Редактировать')}
            </AppButton>
          )
        : (
            <>
              <AppButton
                  className={cls.editBtn}
                  variant={AppButtonVariant.OUTLINE_RED}
                  onClick={onCancelEdit}
              >
                  {t('Отменить')}
              </AppButton>
              <AppButton
                  className={cls.saveBtn}
                  variant={AppButtonVariant.OUTLINE}
                  onClick={onSave}
              >
                  {t('Сохранить')}
              </AppButton>
            </>
          )}
    </div>
  )
}

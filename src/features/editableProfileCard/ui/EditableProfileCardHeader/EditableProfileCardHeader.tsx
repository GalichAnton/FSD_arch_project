import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Text title={t('Профиль')} />
        {canEdit && (
          <div>
            {readonly ? (
              <AppButton
                variant={AppButtonVariant.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t('Редактировать')}
              </AppButton>
            ) : (
              <HStack gap="8">
                <AppButton
                  variant={AppButtonVariant.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('Отменить')}
                </AppButton>
                <AppButton
                  variant={AppButtonVariant.OUTLINE}
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('Сохранить')}
                </AppButton>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    );
  },
);

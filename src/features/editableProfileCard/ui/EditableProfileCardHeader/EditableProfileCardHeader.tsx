import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant,
} from '@/shared/ui/deprecated/AppButton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppButton } from '@/shared/ui/redesigned/AppButton';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/Stack';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" max border="partial">
          <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
              <div>
                {readonly ? (
                  <AppButton onClick={onEdit} data-testid="EditableProfileCardHeader.EditButton">
                    {t('Редактировать')}
                  </AppButton>
                ) : (
                  <HStack gap="8">
                    <AppButton
                      onClick={onCancelEdit}
                      data-testid="EditableProfileCardHeader.CancelButton"
                      color="error"
                    >
                      {t('Отменить')}
                    </AppButton>
                    <AppButton
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton"
                      color="success"
                    >
                      {t('Сохранить')}
                    </AppButton>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        </Card>
      }
      off={
        <HStack max justify="between" className={classNames('', {}, [className])}>
          <TextDeprecated title={t('Профиль')} />
          {canEdit && (
            <div>
              {readonly ? (
                <AppButtonDeprecated
                  variant={AppButtonVariant.OUTLINE}
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Редактировать')}
                </AppButtonDeprecated>
              ) : (
                <HStack gap="8">
                  <AppButtonDeprecated
                    variant={AppButtonVariant.OUTLINE_RED}
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('Отменить')}
                  </AppButtonDeprecated>
                  <AppButtonDeprecated
                    variant={AppButtonVariant.OUTLINE}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('Сохранить')}
                  </AppButtonDeprecated>
                </HStack>
              )}
            </div>
          )}
        </HStack>
      }
    />
  );
});

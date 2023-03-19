import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <AppButton
                    variant={AppButtonVariant.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </AppButton>
            </div>
        </DynamicModuleLoader>
  )
})

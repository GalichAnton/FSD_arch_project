import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton'

interface LanguageSwitcherProps {
  className?: string
  short?: boolean
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className, short } = props
  const { t, i18n } = useTranslation()

  return (
      <AppButton
        variant={AppButtonVariant.CLEAR}
        className={classNames('', {}, [className])}
        onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
      >
        {t(short ? 'Короткй язык' : 'Язык')}
      </AppButton>
  )
})

LanguageSwitcher.displayName = 'LanguageSwitcher'

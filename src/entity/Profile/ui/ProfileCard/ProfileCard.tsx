import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import cls from './ProfileCard.module.scss'
import { type Profile } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader'
import { CurrencySelect, type Currency } from '@/entity/Currency'
import { CountrySelect, type Country } from '@/entity/Country'
import { Avatar } from '@/shared/ui/Avatar'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props

  if (isLoading) {
    return (
        <HStack justify='center' max className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
            <Loader />
        </HStack>
    )
  }

  if (error) {
    return (
        <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <VStack gap='16' max className={classNames(cls.ProfileCard, mods, [className])}>
          {data?.avatar && (
              <HStack justify='center' max className={cls.avatarWrapper}>
                  <Avatar src={data?.avatar} />
              </HStack>
          )}
          <Input
              value={data?.first}
              placeholder={t('Ваше имя')}
              className={cls.input}
              onChange={onChangeFirstname}
              readOnly={readonly}
              data-testid="ProfileCard.firstname"
          />
          <Input
              value={data?.lastname}
              placeholder={t('Ваша фамилия')}
              className={cls.input}
              onChange={onChangeLastname}
              readOnly={readonly}
              data-testid="ProfileCard.lastname"
          />
          <Input
              value={data?.age}
              placeholder={t('Ваш возраст')}
              className={cls.input}
              onChange={onChangeAge}
              readOnly={readonly}
          />
          <Input
              value={data?.city}
              placeholder={t('Город')}
              className={cls.input}
              onChange={onChangeCity}
              readOnly={readonly}
          />
          <Input
              value={data?.username}
              placeholder={t('Введите имя пользователя')}
              className={cls.input}
              onChange={onChangeUsername}
              readOnly={readonly}
          />
          <Input
              value={data?.avatar}
              placeholder={t('Введите ссылку на аватар')}
              className={cls.input}
              onChange={onChangeAvatar}
              readOnly={readonly}
          />
          <CurrencySelect
              className={cls.input}
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
          />
          <CountrySelect
              className={cls.input}
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
          />
      </VStack>
  )
}

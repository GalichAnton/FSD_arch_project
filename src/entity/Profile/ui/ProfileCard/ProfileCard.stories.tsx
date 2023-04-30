import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import { Country } from 'entity/Country'
import { Currency } from 'entity/Currency'
import avatar from 'shared/assets/tests/avatar.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.RUB,
    avatar,
  },
}

export const withError = Template.bind({})
withError.args = {
  error: 'true',
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

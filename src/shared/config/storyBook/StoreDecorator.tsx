import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entity/Article/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
import { loginReducer } from '@/features/AurhByUserName/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)

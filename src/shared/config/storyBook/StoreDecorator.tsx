import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AurhByUserName/model/slice/loginSlice'
import { profileReducer } from 'entity/Profile'
import { articleDetailsReducer } from 'entity/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)

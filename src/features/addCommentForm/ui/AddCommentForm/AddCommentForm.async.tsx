import { type ComponentType, lazy } from 'react'
import { type AddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync = lazy<ComponentType<AddCommentFormProps>>(async () =>
  await import(/* webpackChunkName: "AddCommentFormAsync" */'./AddCommentForm')
    .then(module => ({ default: module.AddCommentForm })))

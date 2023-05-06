import { type StateSchema } from '@/app/providers/StoreProvider'

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || ''

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || ''

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || null

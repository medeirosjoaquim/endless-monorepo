import { createAction } from '@reduxjs/toolkit'

export const signin = createAction<{ user: string, password: string } | undefined>('account/signin')
export const signout = createAction('account/signout')

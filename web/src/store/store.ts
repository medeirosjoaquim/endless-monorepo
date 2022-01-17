import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './reducers'
// ...

export const store = configureStore({
    reducer: {
        account: accountReducer,
        // comments: commentsReducer,
        // users: usersReducer,
    },
    devTools: true
    // devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
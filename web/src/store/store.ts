import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import accountReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
import logger from 'redux-logger'
import { watcherSaga } from '../sagas/rootSaga'

export const store = configureStore({
    reducer: {
        account: accountReducer,
        // comments: commentsReducer,
        // users: usersReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
        .concat(sagaMiddleware)
    // devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
})


sagaMiddleware.run(watcherSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
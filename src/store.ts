import { configureStore } from '@reduxjs/toolkit'
import wilayahReducer from './features/wilayah/wilayahSlice'
import weatherReducer from './features/weather/weatherSlice'

export const store = configureStore({
    reducer: {
        wilayah: wilayahReducer,
        weather: weatherReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
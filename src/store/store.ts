import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from '../services/catalog'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([githubApi.middleware])
})

setupListeners(store.dispatch)

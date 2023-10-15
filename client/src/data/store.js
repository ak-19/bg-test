import { configureStore } from '@reduxjs/toolkit';

import movies from './moviesReducer'

const store = configureStore({
    reducer: {
        movies
    }
})

export default store;
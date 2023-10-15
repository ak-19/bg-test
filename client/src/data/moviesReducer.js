import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getData } from '../api'

const initialState = {
    movies: [],
    displayMovies: [],
    filter: null,
    search: null,
    genres: [],
    error: null,
    selectedMovie: null
}

export const retrieveMovies = createAsyncThunk(
    'movies/retrieveMovies',
    async () => {
        const response = await getData()
        return response.data
    }
)

const updateDisplayMovies = (state) => {
    if (state.filter && state.search) state.displayMovies = state.movies.filter(movie => movie.genres.includes(state.filter) && movie.name.toLowerCase().includes(state.search.toLowerCase()))
    else if (state.filter) state.displayMovies = state.movies.filter(movie => movie.genres.includes(state.filter))
    else if (state.search) state.displayMovies = state.movies.filter(movie => movie.name.toLowerCase().includes(state.search.toLowerCase()))
    else state.displayMovies = state.movies
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        },
        setSelectedMovie(state, action) {
            state.selectedMovie = action.payload;
        },
        setMovieFilter(state, action) {
            state.filter = action.payload;
            updateDisplayMovies(state)
        },
        setMovieSearch(state, action) {
            state.search = action.payload;
            updateDisplayMovies(state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(retrieveMovies.fulfilled, (state, action) => {
            const { movies, genres } = action.payload;
            state.displayMovies = state.movies = movies;
            state.genres = genres;
            state.error = null;
        })
    },
})

export const { clearError, setSelectedMovie, setMovieFilter, setMovieSearch } = moviesSlice.actions;

export default moviesSlice.reducer;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Autocomplete, Grid, SvgIcon, TextField } from '@mui/material';
import { Container, CssBaseline, Stack, Typography } from '@mui/material';

import Movie from './Movie';
import Search from './Search';
import { retrieveMovies, setMovieFilter, setMovieSearch } from '../data/moviesReducer';

import './MovieList.scss'

const MovieList = () => {
    const { displayMovies: movies, genres } = useSelector(state => state.movies)

    const dispatch = useDispatch();

    useEffect(() => { dispatch(retrieveMovies()) }, [dispatch])

    const setSearch = (searchText) => dispatch(setMovieSearch(searchText))

    const setFilter = (filter) => dispatch(setMovieFilter(filter))

    return (
        <Container component="main">
            <CssBaseline />
            <img className='logo-image' src='/assets/back.png' alt='movies' />
            <Stack direction="column" spacing={2}>
                <Search searchMovies={(searchText) => setSearch(searchText)} />
                <Autocomplete
                    inputprops={{ readOnly: true }}
                    disablePortal
                    id="combo-box-demo"
                    options={genres}
                    onChange={(_, newValue) => setFilter(newValue)}
                    renderInput={(params) => <TextField {...params} label="Filter movies" />}
                />
                <Container style={{ marginTop: '50px' }}>
                    <Grid container spacing={4} >
                        {movies && movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
                    </Grid>
                </Container>
            </Stack>
        </Container>
    )
}

export default MovieList;
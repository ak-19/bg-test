import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardMedia } from '@mui/material';
import { imagesUrl } from '../../api';
import { setSelectedMovie } from '../../data/moviesReducer';
import "./Movie.scss";

export default function Movie({ movie }) {
  const dispatch = useDispatch();

  const history = useNavigate();
  return (
    <Card className='movie-card '>
      <CardHeader subheader={movie.name} />
      <CardMedia
        component="img"
        onClick={() => {
          dispatch(setSelectedMovie(movie))
          history(`/moviedetails`);
        }}
        className={`poster posterLarge`}
        image={`${imagesUrl}/${movie.img}`}
        alt={movie.name}
      />
    </Card>
  );
}
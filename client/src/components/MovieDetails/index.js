import { Component } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Typography, Chip, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { imagesUrl } from "../../api";

import './MovieDetails.scss'

const renderGenres = (genres) => {
    return genres.map((genre, index) => {
        return <Chip key={index} label={genre} />
    })
}

class MovieDetails extends Component {
    render() {
        if (!this.props.movie) return <Navigate to="/" />

        return (
            <div className="main-movie-detail-wrapper">
                <Link to={'/movies'}>
                    <IconButton aria-label="settings" edge="start">
                        <ArrowBackIcon /> back
                    </IconButton>
                </Link>
                <Card className="card">
                    <CardMedia
                        className="media"
                        image={`${imagesUrl}/${this.props.movie.img}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.movie.name}
                        </Typography>
                        <Typography variant="body2">
                            {this.props.movie.description}
                        </Typography>
                        <Typography sx={{ mt: 1.5 }} color="text.secondary">
                            {`Duration: ${this.props.movie.length}`}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {`Rate: ${this.props.movie.rate}`}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {renderGenres(this.props.movie.genres)}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ movie: state.movies.selectedMovie });

export default connect(mapStateToProps)(MovieDetails);

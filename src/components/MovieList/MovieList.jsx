import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch ({type: 'FETCH_GENRES'}),
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const details = (movie) => {
        dispatch({
            type: 'SET_MOVIE_DETAILS',
            payload: movie
        })
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card key={movie.id} sx={{maxWidth: 200}} onClick={() => details(movie)}>
                            <CardMedia
                              component="img"
                             // height="200"
                              image= {movie.poster}
                              alt= {movie.title}
                            />

                        <CardContent>
                            <Typography gutterBottom variant="p" component="div">
                            <h3>{movie.title}</h3>
                             </Typography>
                        </CardContent>
                        </Card>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
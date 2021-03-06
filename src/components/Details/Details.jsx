import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import Button from '@mui/material/Button';
import './Details.css';

function Details () {
    const history = useHistory();
    const dispatch = useDispatch ();


    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres)
    console.log('details for:', movie, genres);
    const selectedGenres = genres[movie.id -1]; 
    console.log('selectedGenres', selectedGenres);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_GENRES',
            payload: movie.id
        });
    }, []);

    

    const onGoBack = () => {
        history.push('/');
    };

    
    return (

        //getting movie details for each movie based on ID
        <>
       <div className="container">
                <h1>Movie Details</h1>
                <h2>{movie.title}</h2>
                <img
                    src={movie.poster}
                />
                <h3>Movie Description</h3>
                <p className="description">{movie.description}</p><br/>
                
                <h3>Movie Genres</h3>
                <h1>{selectedGenres.genre_name}</h1>
            </div>
            <Button variant = "contained"  onClick={onGoBack}>
                HOME
            </Button>
       
        </>
    )
}

export default Details;
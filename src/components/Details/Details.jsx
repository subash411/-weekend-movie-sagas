import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

function Details () {
    const history = useHistory();
    const dispatch = useDispatch ();


    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres)
    console.log('lets checkout movie', movie, genres);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_GENRES',
            payload: movie.id
        });
    }, []);

    

    const onGoBack = () => {
        history.push('/');
    }

    
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
                <p>{movie.description}</p><br/>
                <h3>Movie Genres</h3>
                <table className="table">
                    <tbody>
                        {genres.map(genres => (
                            <tr key={genres}>
                                <td>{genres}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
       <button onClick={onGoBack}>HOME</button>
        </>
    )
}

export default Details;
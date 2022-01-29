import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Details () {
    const history = useHistory();
    const movie = useSelector(store => store.movie);
    console.log('lets checkout movie', movie[0]);

    const onGoBack = () => {
        history.push('/');
    }

    
    return (

        //getting movie details for each movie based on ID
        <>
       {movie.map(movie =>(
           <div key={movie.id}>
               <h3>{movie.title}</h3>
               <img src={movie.poster} alt={movie.title} />
               <p>Genres: {movie.genres.join(', ')}</p>
               <p>Descriptions: {movie.description}</p>
           </div>
       ))}
       <button onClick={onGoBack}>HOME</button>
        </>
    )
}

export default Details;
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router> 
        <nav>
          <Link className="Link" to="/">Details</Link>
        </nav> 
      <Route path="/" exact>
          <Details />

        </Route>

        <Route path="/" exact>
          <MovieList />
        </Route>

        

        
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;

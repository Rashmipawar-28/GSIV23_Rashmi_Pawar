import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './layout/MovieList';
import MovieDetails from './layout/MovieDetails';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MovieList/>} />
          <Route path="/movie/:movieId" element={<MovieDetails/>} />
        </Routes>
      </Router>
  );
}

export default App;

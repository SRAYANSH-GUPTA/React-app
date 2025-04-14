import react, { useEffect ,useState} from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const base_url = "http://www.omdbapi.com/?i=tt3896198&apikey=bcfc7487";



const movieExample = {
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjg1ZGRiMTEtYmU4Zi00NTkwLWJmODQtMjU3MTAyMGQ2OGZlXkEyXkFqcGc@._V1_SX300.jpg"
} 

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search,setSearch] = useState("Superman");
    const fetchdata = async(title) => {
        const response = await fetch(`${base_url}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }
    useEffect(() =>{
        fetchdata("Superman");
    },[])
    return (
    <div className="app">
      <h1>Movies</h1>
      <div className="search">
        <input type="text" placeholder="Search for a movie" defaultValue={search} onChange={(e) => fetchdata(e.target.value)}/>
        <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="" onClick={() => fetchdata(search)} />


      </div>
      <div className="container">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
    );
}

export default App;
  
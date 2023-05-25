import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await axios("http://localhost:5005/api/movies");
    if (response) {
      setMovies(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {movies.map((movie) => {
        return (
          <div key={movie._id} className="movieCard">
            <div>
              <h1>{movie.title}</h1>
              <h3>{movie.description}</h3>
            </div>
            <img
              src={movie.imageUrl}
              alt={movie._id}
              style={{ width: "10vw" }}
            />
          </div>
        );
      })}
    </>
  );
}

export default HomePage;

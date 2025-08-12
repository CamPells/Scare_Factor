import React, { useEffect, useState } from "react";

const token = import.meta.env.VITE_TMDB_V4;

type MovieCard = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
};

function Movie() {
  const [movieList, setMovieList] = useState<MovieCard[]>([]);
  const [shownMovie, setShownMovie] = useState<MovieCard>();

  const getRand = () => {
    if (movieList.length === 0) return;

    const randMovie = movieList[Math.floor(Math.random() * movieList.length)];
    console.log(movieList.length);
    setShownMovie(randMovie);
    console.log(randMovie + "fwefwefwefw");
  };

  const apiKey = import.meta.env.VITE_API_KEY;
  const randPage = Math.floor(Math.random() * 500);
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=27&page=${3}`;

  const getMovie = () => {
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovieList(json.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log(shownMovie);
    getRand();
  }, [movieList]);

  return (
    <div style={{ border: "2px solid black", padding: "2rem" }}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${shownMovie?.poster_path}`}
          alt="src/assets/The_Autopsy_of_Jane_Doe.jpg"
        />
        <div>description: {shownMovie?.overview} </div>
      </div>
      <div>{shownMovie?.title}</div>
      <button onClick={getRand}></button>
    </div>
  );
}

export default Movie;

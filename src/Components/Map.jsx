const Map = () => {
  const movies = [
    {
      name: "maca",
      genre: "Fantasy",
    },
    {
      name: "maca",
      genre: "Fantasy",
    },
    {
      name: "maca",
      genre: "Fantasy",
    },
    {
      name: "maca",
      genre: "Fantasy",
    },
  ];

  return (
    <div className="container">
      <ul>
        {movies.map((movie) => (
          <li key={movie.name}>
            {movie.name} {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;

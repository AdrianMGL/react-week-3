import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/SearchPokemon.css";
import Pagination from "./Pagination";
import SearchPokemonItem from "./SearchPokemonItem";
import Spinner from "./spinner/Spinner";

function SearchPokemon() {
  const [pokemonType, setPokemonType] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const random = Math.floor(Math.random() * 20) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/type/${random}/`)
      .then((res) => setPokemonType(res.data));
    setLoading(false);
  }, []);

  const searchType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${searchValue}/`)
      .then((res) => setPokemonType(res.data));
    setLoading(false);
  };

  console.log(pokemonType);

  /** Get current posts */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFisrtPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemonType.pokemon?.slice(
    indexOfFisrtPost,
    indexOfLastPost
  );

  /** Change page */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="App">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={searchType}>Submit</button>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>{pokemonType.name}</h1>
            <ul className="dates__pokemon">
              {currentPosts?.map((pokemon) => (
                <SearchPokemonItem
                  pokemon={pokemon}
                  key={pokemon.pokemon.url}
                />
              ))}
            </ul>

            <div className="pagi">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={pokemonType.pokemon?.length}
                paginate={paginate}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SearchPokemon;

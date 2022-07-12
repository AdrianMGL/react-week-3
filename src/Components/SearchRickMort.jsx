import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/SearchRickMort.css";

function SearchRickMort() {
  const [location, setLocation] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 20) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setLocation(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}/`)
      .then((res) => setLocation(res.data));
  };

  console.log(location);
  console.log(searchValue);

  return (
    <div className="App">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={searchType}>Search</button>
      <h1>{location.name}</h1>
    </div>
  );
}

export default SearchRickMort;

import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchPokemonItem = ({ pokemon }) => {
  const [pokemonItem, setPokemonItem] = useState({});

  useEffect(() => {
    axios.get(pokemon.pokemon.url).then((res) => setPokemonItem(res.data));
  }, [pokemon]);

  return (
    <div className="dates__pokemon-item">
      <div className="wrapper__pokemon">
        <div className="date__basic">
          <h5>{pokemonItem.types?.[0].type.name}</h5>
          <h6>{pokemonItem.id}</h6>
        </div>
        <img
          src={pokemonItem.sprites?.other.home.front_default}
          alt={pokemonItem.name}
        />
        <div className="date__pokemon-info">
          <h2>{pokemonItem.name}</h2>
          <h6>HP: {pokemonItem.stats?.[0].base_stat}</h6>
          <h6>Attack: {pokemonItem.stats?.[1].base_stat}</h6>
          <h6>Defense: {pokemonItem.stats?.[2].base_stat}</h6>
          <h6>Special Attack: {pokemonItem.stats?.[3].base_stat}</h6>
          <h6>Special Defense: {pokemonItem.stats?.[4].base_stat}</h6>
          <h6>Speed: {pokemonItem.stats?.[5].base_stat}</h6>
        </div>
      </div>
    </div>
  );
};

export default SearchPokemonItem;

const GetInfo = ({ info, country }) => {
  if (info === "demography") {
    return (
      <>
        <h3>Demography</h3>
        <div>
          <b>Population: </b> {country.population}
        </div>
        <div>
          <b>Area: </b> {country.area}
        </div>
      </>
    );
  } else if (info === "location") {
    return (
      <>
        <h3>Location</h3>
        <div>
          <b>Continent: </b> {country.continents?.[0]}
        </div>
        <div>
          <b>Region: </b> {country.region}
        </div>
        <div>
          <b>Subregion: </b> {country.subregion}
        </div>
      </>
    );
  } else if (info === "capital") {
    return (
      <>
        <h3>Capital</h3>
        <div>
          <b>Capital: </b>
          {country.capital?.[0]}
        </div>
      </>
    );
  }
};

export default GetInfo;

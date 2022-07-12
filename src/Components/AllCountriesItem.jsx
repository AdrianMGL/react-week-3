const AllCountriesItem = ({ country }) => {
  return (
    <>
      <div className="container__img">
        <img src={country.flags?.svg} alt="" />
      </div>
      <h1>{country.name?.official}</h1>

      <h4>{country.capital?.[0]}</h4>
      <h6>
        Region: <span>{country.region}</span>
      </h6>
      <h6>
        Subregion: <span>{country.subregion}</span>
      </h6>
      <h6>
        Population: <span>{country.population}</span>
      </h6>
    </>
  );
};

export default AllCountriesItem;

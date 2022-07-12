import axios from "axios";
import { useEffect, useState } from "react";
import AllCountriesItem from "./AllCountriesItem";
import '../Styles/AllCountries.css'

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //const randomId = Math.floor(Math.random() * 600) + 1;
    axios
      .get(`https://restcountries.com/v3.1/all`)
      // Paso 3: setear el estado
      .then((res) => {
        setCountries(res.data);
      });
    // .finally(() => setIsLoading(false));
  }, []);

  console.log(countries);

  return (
    <div className="container__countries">
      {countries.map((country) => (
        <div className="country__name" key={country.name?.common}>
          <AllCountriesItem 
            country = {country}
          />
        </div>
      ))}
    </div>
  );
};

export default AllCountries;

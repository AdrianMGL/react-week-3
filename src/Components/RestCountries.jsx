import axios from "axios";
import "../Styles/RestCountries.css";
import { useEffect, useState } from "react";
import GetInfo from "./GetInfo";

const RestCountries = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState("demography");

  useEffect(() => {
    //const randomId = Math.floor(Math.random() * 600) + 1;
    axios
      .get(`https://restcountries.com/v3.1/name/mexico`)
      // Paso 3: setear el estado
      .then((res) => {
        setCountry(res.data[0]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log(country);

  /** */


  return (
    <div className="container">
      <div className="card">
        {isLoading ? (
          <h1>Esta cargando...</h1>
        ) : (
          <>
            <img src={country.flags?.svg} alt="" />
            <div className="section__dates">
              <h1>{country.name?.common}</h1>
              <br />
              <button onClick={() => setInfo("demography")}>Demography</button>
              <button onClick={() => setInfo("location")}>location</button>
              <button onClick={() => setInfo("capital")}>capital</button>
              <GetInfo info={info} country={country}/>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestCountries;

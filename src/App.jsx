import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import InputText from "./Components/InputText";
import RestCountries from "./Components/RestCountries";
import Map from "./Components/Map";
import Quotes from "./Components/Quotes";
import Users from "./Components/Users";
import AllCountries from "./Components/AllCountries";
import SearchRickMort from "./Components/SearchRickMort";
import SearchPokemon from "./Components/SearchPokemon";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      {/* <button onClick={() => setIsVisible(!isVisible)}>Show/hidde</button>
      {isVisible && <RestCountries />} */}

      {/* <Counter/> */}
      {/* <InputText/> */}
      {/* <Map/> */}
      {/* <Quotes/> */}
      {/* <Users/> */}
      {/* <AllCountries/> */}

      <SearchPokemon />
      {/* <SearchRickMort /> */}
    </div>
  );
}

export default App;

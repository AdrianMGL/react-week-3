import React from "react";

const GetMultiply = ({ counter }) => {
  if (counter % 2 === 0) {
    return (
      <>
        <h1>Es multiplo de dos</h1>
        <p>Los números pares son geniales :D</p>
      </>
    );
  } else if (counter % 3 === 0) {
    return (
      <>
        <h1>Es multiplo de tres</h1>
        <p>Los múltiplos </p>
      </>
    );
  } else if (counter % 5 === 0) {
    return <h1>Es múltiplo de cinco</h1>;
  } else {
    return <h1>No es múltimplo de dos, tres ni cinco</h1>;
  }
};

export default GetMultiply;

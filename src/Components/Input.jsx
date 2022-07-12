import { useState } from "react";

const InputText = () => {
  const [textInput, setTextInput] = useState("Ingrese texto");
  return (
    <div className="container">
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <p>{textInput}</p>
    </div>
  );
};

export default InputText;

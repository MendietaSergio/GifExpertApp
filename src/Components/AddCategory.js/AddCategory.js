import { useState } from "react";
import "./AddCategory.css";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");
  //para que cambie el valor del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log("submit");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
      </form>
    </>
  );
};

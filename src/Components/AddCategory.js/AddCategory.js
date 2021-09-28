import { useState } from "react";
import "./AddCategory.css";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories,categories}) => {
  const [inputValue, setInputValue] = useState("Hola Mundo");
  //para que cambie el valor del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();  
    // console.log("submit");
    if(inputValue.trim().length>2){
        setCategories([...categories,inputValue])
        setInputValue('')
    }
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

//para decir que sea requerido las props
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
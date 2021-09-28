import React, { useState } from "react";
import "./GifExpertApp.css"
export const GifExpertApp = () =>{
    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories ] = useState(['One Puch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () =>{
        setCategories([...categories, 'HunterXHunter'])
        console.log("click");
    }

    return(
        <>
            <h2 className="title-h1">GifExpertApp</h2>
            <hr className="title-linea"/>
            <button type="button" onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map((category) =>{
                        return  <li key={category}>{category}</li>
                    })
                }
            </ol>

        </>
    )
}
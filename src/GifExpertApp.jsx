import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory/AddCategory";
import "./GifExpertApp.css"
import { GifGrid } from "./Components/GifGrid/GifGrid";
export const GifExpertApp = () =>{
    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories ] = useState(['Dragon Ball'])

    return(
        <>
            <h2 className="title-h1 animate__shakeX animate__animated ">GifExpertApp</h2>
            <AddCategory setCategories={setCategories} categories={categories} />
            <hr className="title-linea"/>
            <ol>
                {
                    categories.map((category) =>
                        <GifGrid key={category} category={category}/>
                    )
                }
            </ol>

        </>
    )
}
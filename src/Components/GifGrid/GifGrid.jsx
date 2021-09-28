import React,{ useEffect } from "react"
import { useState } from "react"
import { getGifs } from "../../helpers/getGifts";
import { GifGridItem } from "../GifGridItem/GifGridItem";
export const GifGrid = ({category}) =>{

    const [images, setImages ] = useState([])

    useEffect(()=>{
        getGifs(category)
            .then(setImages)
    },[category]);//PARA QUE SE EJECUTE UNA SOLA VEZ[], [category] para que cargue de nuevo
    
    
    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">

                {images.map(img =>(
                    <GifGridItem  
                        key={img.id}
                        img={img} />
                ))}
            </div>
        </>
    )
}
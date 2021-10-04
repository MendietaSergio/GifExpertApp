import React from "react"
import { useFetchGifs } from "../hooks/useFetchGif"
import { GifGridItem } from "../GifGridItem/GifGridItem";
export const GifGrid = ({category}) =>{

    const {data, loading} = useFetchGifs(category)
    console.log(loading);

    return(
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p> }
            <div className="card-grid">

                {data.map(img =>(
                    <GifGridItem  
                        key={img.id}
                        img={img} />
                ))}
            </div>
        </>
    )
}
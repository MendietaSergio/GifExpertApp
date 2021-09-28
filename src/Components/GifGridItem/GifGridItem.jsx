import React from "react";

export const GifGridItem = ({img})=>{
    console.log(img);
    return(
        <>

            <img src={img.url} title={img.title}/>
            <p>{img.title}</p>

        </>
    )
}
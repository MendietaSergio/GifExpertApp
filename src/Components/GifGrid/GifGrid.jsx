import React from "react"
export const GifGrid = ({category}) =>{
    
    const getGifs = async () =>{
        const URL = "https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=qQhMWqufAb6xYXp6oZkyazCRNg4b3hVB"
        const resp = await fetch(URL)
        const {data} = await resp.json()
        
        //obtengo los datos que me interezan en otro array
        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }
    
    getGifs()
    return(
        <>
            <h3>{category}</h3>
        </>
    )
}
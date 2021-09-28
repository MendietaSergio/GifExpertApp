import React,{ useEffect } from "react"
import { useState } from "react"
export const GifGrid = ({category}) =>{
    const [ count, setCount ] = useState(0)
    useEffect(()=>{
        getGifs()
    },[]);//PARA QUE SE EJECUTE UNA SOLA VEZ
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
    
    return(
        <>
            <h3>{category}</h3>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}></button>
        </>
    )
}


export const getGifs = async ( category ) =>{
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=qQhMWqufAb6xYXp6oZkyazCRNg4b3hVB`
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
    return gifs;
}
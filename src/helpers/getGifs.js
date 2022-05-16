
export  const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=xCSZMfXzCIDYbQZDig5RVe2YlXZYs50Y`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            image: img.images.downsized_medium.url,
            title: img.title,
        }
    }
    )
    return gifs
}
export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=UvYmjGOishs9WJUsZb6vLQDdzvFqP4NC&q=${categoria}&limit=20`;
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs
  }
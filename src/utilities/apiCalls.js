const API_KEY = process.env.REACT_APP_API_KEY

const getGames = async (id, errorHandler) => {
  const singleFightingGameURL = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`

  try {
    const response = await fetch(singleFightingGameURL)
    if(!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
    }

    const data = await response.json()
    const { id, name, slug, description_raw, metacritic, released, background_image, background_image_additional,
          website, platforms, developers, publishers, esrb_rating } = data

    const dataObject = {
      id: id,
      name: name,
      slug: slug,
      description_raw: description_raw,
      metacritic: metacritic,
      released: released,
      background_image: background_image,
      background_image_additional: background_image_additional,
      website: website,
      platforms: platforms,
      developers: developers,
      publishers: publishers,
      esrb_rating: esrb_rating
    }

    return dataObject
}

catch (error) {
  errorHandler(error.message)
  }
}

export { getGames }

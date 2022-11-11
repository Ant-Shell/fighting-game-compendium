const API_KEY = process.env.REACT_APP_API_KEY

const getGames = async (id) => {
  const singleFightingGameURL = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`

  try {
    const response = await fetch(singleFightingGameURL)
    if(!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
    }
    const data = await response.json()
    return data
}
catch (error) {
    console.log(error.message)
    return (error.message)
  }
}

export { getGames }

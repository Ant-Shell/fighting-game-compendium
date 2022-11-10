import GameCard from "../GameCard/GameCard";
import "./GamesContainer.css"

const GamesContainer = ({ fightingGames }) => {
  const fightingGamesList = fightingGames.map(game => {
    const { name, background_image, id } = game
    return (
      <GameCard
        id={id}
        name={name}
        background_image={background_image}
        key={id}
      />
    )
  })

  return(
    <div className='games-container'>
      {fightingGamesList}
    </div>
  )
}

export default GamesContainer

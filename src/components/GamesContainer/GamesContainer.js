import GameCard from "../GameCard/GameCard";
import "./GamesContainer.css"

const GamesContainer = ({ fightingGames }) => {
  const fightingGamesList = fightingGames.map(game => {
    const { name, background_image, id, slug } = game
    return (
      <GameCard
        id={id}
        name={name}
        slug={slug}
        background_image={background_image}
        key={id}
      />
    )
  })

  return(
    <section>
      <div className="search-conatainer">
        <p className="test">Test</p>
      </div>
      <div className='games-container'>
        {fightingGamesList}
      </div>
    </section>
  )
}

export default GamesContainer

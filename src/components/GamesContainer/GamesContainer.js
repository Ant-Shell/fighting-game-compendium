import GameCard from "../GameCard/GameCard";
import SearchBar from "../SearchBar/SearchBar"
import PropTypes from "prop-types"
import "./GamesContainer.css"

const GamesContainer = ({ fightingGames, searchForGame, searchedGames, foundSearchResults }) => {

  const listSetter = (bool) => {
    if (bool === false) {
      return fightingGames
    } else {
      return searchedGames
    }
  }

  const fightingGamesList = listSetter(foundSearchResults).map(game => {
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
        <SearchBar fightingGames={fightingGames} searchForGame={searchForGame} foundSearchResults={foundSearchResults}/>
      </div>
      <div className='games-container'>
        {fightingGamesList}
      </div>
    </section>
  )
}

export default GamesContainer

GamesContainer.propTypes = {
  fightingGames: PropTypes.array.isRequired,
  searchForGame: PropTypes.func.isRequired,
  searchedGames: PropTypes.array.isRequired,
  foundSearchResults: PropTypes.bool.isRequired,
}

GamesContainer.defaultProps = {
  foundSearchResults: false
}
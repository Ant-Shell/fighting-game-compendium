import { useState } from "react"
import PropTypes from "prop-types"
import "./SearchBar.css"

const SearchBar = ({ searchForGame, foundSearchResults }) => {
  const [userInput, setUserInput] = useState('')

  const searchAction = (event) => {
    setUserInput(event)
    searchForGame(event)
  }

  const errorRender = () => {
    if (!foundSearchResults && userInput) {
      return <p className="error-message" data-cy='not-found-message'>No Results Found.</p>
    }
  }

  return (
    <form>
      <input 
      type="text"
      placeholder="Search Games"
      name="search"
      value={userInput}
      data-cy='input'
      onChange={(event) => searchAction(event.target.value)}
      />
      {errorRender()}
    </form>
  )
}

export default SearchBar

SearchBar.propTypes = {
  searchForGame: PropTypes.func.isRequired,
  foundSearchResults: PropTypes.bool.isRequired,
}

SearchBar.defaultProps = {
  foundSearchResults: false
}
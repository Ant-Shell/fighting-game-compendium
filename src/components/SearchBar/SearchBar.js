import { useState } from "react"
import "./SearchBar.css"

const SearchBar = ({ searchForGame, foundSearchResults }) => {
  const [userInput, setUserInput] = useState('')

  const searchAction = (event) => {
    setUserInput(event)
    searchForGame(event)
  }

  const errorRender = () => {
    if (!foundSearchResults && userInput) {
      return <p className="error-message">No Results Found.</p>
    }
  }

  return (
    <form>
      <input 
      type="text"
      placeholder="Search Games"
      name="search"
      value={userInput}
      onChange={(event) => searchAction(event.target.value)}
      />
      {errorRender()}
    </form>
  )
}

export default SearchBar
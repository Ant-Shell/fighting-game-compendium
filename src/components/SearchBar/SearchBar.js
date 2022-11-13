import { useState } from "react"
import "./SearchBar.css"

const SearchBar = ({ searchForGame, foundSearchResults }) => {
  const [userInput, setUserInput] = useState('')

  // function that calls setUserInput and also
  // performs a search based on user input
  // put search result in separate state in app (array)?
  // render that if doing a search, else ender all
  // games - based on boolean?
  // ex: if userInput has a value, flip
  // boolean to true and render the search results array

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
import { useState } from "react"
import "./SearchBar.css"

const SearchBar = ({ searchForGame }) => {
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

  return (
    <form>
      <input 
      type="text"
      placeholder="Search Games"
      name="search"
      value={userInput}
      onChange={(event) => searchAction(event.target.value)}
      />
    </form>
  )
}

export default SearchBar
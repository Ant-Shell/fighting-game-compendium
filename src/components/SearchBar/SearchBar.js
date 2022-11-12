import { useState } from "react"
import "./SearchBar.css"

const SearchBar = () => {
  const [userInput, setUserInput] = useState('')

  // function that calls setUserInput and also
  // performs a search based on user input
  // put search result in separate state in app?
  // render that if doing a search, else ender all
  // games?

  return (
    <form>
      <input 
      type="text"
      placeholder="Search Games"
      name="search"
      value={userInput}
      onChange={(event) => setUserInput(event.target.value)}
      />
    </form>
  )
}

export default SearchBar
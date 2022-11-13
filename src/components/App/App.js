import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import { getGames } from "../../utilities/apiCalls"
import Header from "../Header/Header"
import LoadingPage from '../LoadingPage/LoadingPage';
import ErrorPage from "../ErrorPage/ErrorPage"
import GamesContainer from '../GamesContainer/GamesContainer';
import SingleGame from '../SingleGame/SingleGame'
import InvalidLink from '../InvalidLink/InvalidLink';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const [fightingGames, setFightingGames] = useState([])
  const [searchedGames, setSearchedGames] = useState([])
  const [foundSearchResults, setfoundSearchResults] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setErrorMessage('')
    Promise.all(
        [
          getGames('street-fighter-6', setErrorMessage),
          getGames('super-smash-bros-ultimate'),
          getGames('guilty-gear-2020'),
          getGames('tekken-7'),
          getGames('multiversus'),
          getGames('brawlhalla'),
          getGames('street-fighter-v'),
          getGames('dragon-ball-fighterz'),
          getGames('the-king-of-fighters-xv'),
          getGames('melty-blood-type-lumina'),
          getGames('dnf-duel'),
          getGames('blazblue-centralfiction'),
          getGames('granblue-fantasy-versus'),
          getGames('ultimate-marvel-vs-capcom-3'),
          getGames('skullgirls-2nd-encore'),
          getGames('soulcalibur-vi'),
          getGames('virtua-fighter-5-final-showdown'),
          getGames('marvel-vs-capcom-2-new-age-of-heroes'),
          getGames('street-fighter-iii-3rd-strike'),
          getGames('super-smash-bros-melee-2001'),
        ]
      )
    .then(dataObject => setFightingGames(dataObject))
  }, [])

  const searchForGame = (input) => {
    const locateGame = fightingGames.filter(game => game.name.toUpperCase().includes(input.toUpperCase()))
    if(!input || !locateGame.length) {
      setSearchedGames([])
      setfoundSearchResults(false)
    } else {
      setSearchedGames(locateGame)
      setfoundSearchResults(true)
    }
  }

  const loadingScreenRender = () => {
    if(!fightingGames.length && !errorMessage) {
      return <LoadingPage />
    }
  }

  return(
    <main>
        <Header />
        <section>
            {loadingScreenRender()}
            {errorMessage && <ErrorPage errorMessage={errorMessage}/>}
            <Switch>
              <Route exact path="/" render={()=> <GamesContainer fightingGames={fightingGames}
                searchedGames={searchedGames} foundSearchResults={foundSearchResults} searchForGame={searchForGame}/>} />
              <Route exact path="/:slug" render={({ match }) => <SingleGame id={match.params.slug}/>} />
              <Route path="*" render={() => <InvalidLink /> } />
            </Switch>
          </section>
        <Footer />
    </main>
  )
}

export default App;

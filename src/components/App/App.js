import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import { getGames } from "../../utilities/apiCalls"
import Header from "../Header/Header"
import GamesContainer from '../GamesContainer/GamesContainer';
import SingleGame from '../SingleGame/SingleGame'
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const [fightingGames, setFightingGames] = useState([])
  const [searchedGames, setSearchedGames] = useState([])
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
    setSearchedGames(locateGame)
  }

  return(
    <main>
        <Header />
        <section>
            {errorMessage && <p>Sorry, a {errorMessage} error has occured :(</p>}  {/* <ErrorPage /> */}
            <Switch>
              <Route exact path="/" render={()=> <GamesContainer fightingGames={fightingGames} searchForGame={searchForGame}/>} />
              <Route exact path="/:slug" render={({ match }) => <SingleGame id={match.params.slug}/>} />
              {/* <LoadingPage /> */}
              {/* <ErrorPage /> */}
              {/* <InvalidLink /> */}
            </Switch>
          </section>
        <Footer />
    </main>
  )
}

export default App;

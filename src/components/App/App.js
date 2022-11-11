import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import GamesContainer from '../GamesContainer/GamesContainer';
import SingleGame from '../SingleGame/SingleGame'
import './App.css';

const App = () => {
  const [fightingGames, setFightingGames] = useState([])


  useEffect(() => {
    setFightingGames([{name: "Street Fighter 6", background_image: "https://media.rawg.io/media/games/ce2/ce2463db40cec363f360c29ddcc56884.jpg", id: 742771}])
  }, [])

  return(
    <main>
      {/* <Header />  */}
      <Switch>
        <Route exact path="/" render={()=> <GamesContainer fightingGames={fightingGames}/>} />
        <Route path="/:id" render={({ match }) => <SingleGame />} />
        {/* <LoadingPage /> */}
        {/* <ErrorPage /> */}
        {/* <InvalidLink /> */}
      </Switch>
      {/* Footer /> */}
    </main>
  )
}

export default App;

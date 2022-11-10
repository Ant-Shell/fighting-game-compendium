import { useState, useEffect } from 'react';
import GamesContainer from '../GamesContainer/GamesContainer';
import './App.css';

const App = () => {
  const [fightingGames, setFightingGames] = useState([])


  useEffect(() => {
    setFightingGames([{name: "Street Fighter 6", background_image: "https://media.rawg.io/media/games/ce2/ce2463db40cec363f360c29ddcc56884.jpg", id: 742771}])
  }, [])

  return(
    <main>
      {/* <Header />  */}
      <GamesContainer fightingGames={fightingGames}/>
      {/* SingleGame */}
      {/* Footer /> */}
      {/* ErrorPage /> */}
    </main>
  )
}

export default App;

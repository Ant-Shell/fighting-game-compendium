import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [fightingGames, setFightingGames] = useState([])


  useEffect = (() => {
    setFightingGames([{name: "Street Fighter 5", background_image: "https://media.rawg.io/media/games/ce2/ce2463db40cec363f360c29ddcc56884.jpg", id: 742771}])
  }, [])

  return(
    <main>
      {/* <Header />  */}
      {/* GameContainer /> */}
      {/* SingleGame */}
      {/* Footer /> */}
      {/* ErrorPage /> */}
    </main>
  )
}

export default App;

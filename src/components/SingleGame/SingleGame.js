import { useEffect, useState } from "react";
import SingleGameCard from "../SingleGameCard/SingleGameCard"
import "./SingleGame.css"

const SingleGame = () => {
  const [gameInfo, setGameInfo] = useState([])


  useEffect(() => {
    setGameInfo([
      {
        id: 742771,
        name: 'Street Fighter 6',
        description_raw: "A new era for fighting games begins in 2023!\n\nThe evolution of fighting games starts with our traditional Fighting Ground,\nand then we're turning the genre on its head with World Tour and Battle Hub for a total of three modes where anyone can play to their liking.\nNo one starts off as a champion. You get there step by step, punch by punch.\nTake up the challenge and bring your game to the next level.",
        metacritic: 8.0,
	      released: '2023-02-15',
        background_image: 'https://media.rawg.io/media/games/ce2/ce2463db40cec363f360c29ddcc56884.jpg',
        website: 'https://www.streetfighter.com/6/',
	      platforms: [{platform: {name: "PlayStation 5"}}, {platform: {name: "PlayStation 4"}}],
	      developers: [{name: 'Capcom'}, {name: 'Capcom U.S.A.'}],
	      publishers: [{name: 'Capcom'}],
	      esrb_rating: {name: 'Teen'}
      }
    ])
  }, [])


  const listedInfoGetter1 = (listedInfo) => {
    const listedInfoMapper = listedInfo.reduce((acc, info) => {
      if (acc.length > 1) {
        acc = acc + ', ' + info.name
      } else {
        acc = info.name
      }
      return acc
    }, '')
    return listedInfoMapper
  }

  const listedInfoGetter2 = (listedInfo) => {
    const listedInfoMapper = listedInfo.reduce((acc, info) => {
      if (acc.length > 1) {
        acc = acc + ', ' + info.platform.name
      } else {
        acc = info.platform.name
      }
      return acc
    }, '')
    return listedInfoMapper
  }

    const singleGameList = gameInfo.map(info => {
      const { id, name, description_raw, metacritic, released, developers, platforms,
        publishers, esrb_rating, website} = info
      return (
        <div className="game-info-container" key={id}>
          <SingleGameCard
          name={name}
          description={description_raw}
          metacritic={metacritic}
          released={released}
          platforms={listedInfoGetter2(platforms)}
          esrb_rating={esrb_rating[Object.keys(esrb_rating)]}
          developers={listedInfoGetter1(developers)}
          publishers={listedInfoGetter1(publishers)}
          website={website}
          key={id}
          />
        </div>
      )
    })

  return (
  <div>
    {singleGameList}
  </div>
  )
}

export default SingleGame
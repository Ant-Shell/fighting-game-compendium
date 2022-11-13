import { useEffect, useState } from "react";
import { getGames } from "../../utilities/apiCalls"
import SingleGameCard from "../SingleGameCard/SingleGameCard"
import InvalidLink from "../InvalidLink/InvalidLink";
import "./SingleGame.css"

const SingleGame = ({ id }) => {
  const [fightingGame, setFightingGame] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setErrorMessage('')
    getGames(id, setErrorMessage)
    .then(dataObject => setFightingGame([dataObject]))
  }, [id])

  const listedInfoGetter1 = (listedInfo) => {
    nullHandler(listedInfo)
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
    nullHandler(listedInfo)
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

  const ratingGetter = (listedInfo) => {
    if(listedInfo === null) {
      return <p>Please visit: <a href="https://www.esrb.org/" target="_blank" rel="noopener noreferrer">esrb.org</a></p>
    }
    return listedInfo.name
  }

  const nullHandler = (listedInfo) => {
    if(listedInfo === null || listedInfo === '') {
      return <p className="missing-info-notification">Unprovided</p>
    }
    return listedInfo
  }

  const errorChecker = () => {
    if(errorMessage) {
        return <InvalidLink />
    } else {
      const singleGameList = fightingGame.map(info => {
        const { id, name, description_raw, metacritic, released, background_image,
        website, platforms, developers, publishers, esrb_rating } = info
        return (
          <SingleGameCard
            name={name}
            description_raw={description_raw}
            metacritic={nullHandler(metacritic)}
            released={released}
            platforms={listedInfoGetter2(platforms)}
            esrb_rating={ratingGetter(esrb_rating)}
            developers={listedInfoGetter1(developers)}
            publishers={listedInfoGetter1(publishers)}
            website={nullHandler(website)}
            background_image={background_image}
            key={id}
          />
        )
     })
     return singleGameList
   }
  }

  return (
    <div className="game-info-container">
      {errorChecker()}
    </div>
  )
}

export default SingleGame
import { Link } from "react-router-dom"
import "./SingleGameCard.js"

const SingleGameCard = ( {name, description_raw, metacritic, released, background_image, background_image_additional,
  website, platforms, developers, publishers, esrb_rating } ) => {
  return (
  <div className="single-card" >
  <h2>{name}</h2>
  <p>{description_raw}</p>
  <p>MetaCritic Rating: {metacritic}</p>
  <p>Release Date: {released}</p>
  <p>Platforms: {platforms}</p>
  <p>Developers: {developers}</p>
  <p>Publishers: {publishers}</p>
  <p>ESRB Rating: {esrb_rating}</p>
  <p>Website: {website}</p>
  <Link to="/"><button>Return to Games List</button></Link>
</div>
)
}

export default SingleGameCard
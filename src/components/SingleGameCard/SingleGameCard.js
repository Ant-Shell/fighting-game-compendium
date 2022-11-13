import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./SingleGameCard.css"

const SingleGameCard = ({ name, description_raw, metacritic, released, background_image,
  website, platforms, developers, publishers, esrb_rating }) => {
  return (
    <div className="single-card" style={{ backgroundImage: `url(${background_image})`,
        backgroundRepeat: "no-repeat", width: "100vw", height: "100vh", backgroundSize: "cover"}}>
        <section className="info">
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
        </section>
  </div>
 )
}

export default SingleGameCard

SingleGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  description_raw: PropTypes.string.isRequired,
  metacritic: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  platforms: PropTypes.string.isRequired,
  developers: PropTypes.string.isRequired,
  publishers: PropTypes.string.isRequired,
  esrb_rating: PropTypes.string.isRequired,
}
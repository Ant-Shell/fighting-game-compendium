import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./SingleGameCard.css"

const SingleGameCard = ({ name, description_raw, metacritic, released, background_image,
  website, platforms, developers, publishers, esrb_rating }) => {
  return (
    <div className="single-card" style={{ backgroundImage: `url(${background_image})`,
        backgroundRepeat: "no-repeat", width: "100vw", height: "100vh", backgroundSize: "cover"}}>
        <section className="info">
          <h2 data-cy='name'>{name}</h2>
          <p data-cy='description'>{description_raw}</p>
          <p data-cy='meta-rating'>MetaCritic Rating: {metacritic}</p>
          <p data-cy='release-date'>Release Date: {released}</p>
          <p data-cy='platforms'>Platforms: {platforms}</p>
          <p data-cy='developers'>Developers: {developers}</p>
          <p data-cy='publishers'>Publishers: {publishers}</p>
          <p data-cy='esrb-rating'>ESRB Rating: {esrb_rating}</p>
          <p data-cy='website'>Website: {website}</p>
          <Link to="/"><button data-cy='home-button'>Return to Games List</button></Link>
        </section>
  </div>
 )
}

export default SingleGameCard

SingleGameCard.propTypes = {
  name: PropTypes.string,
  description_raw: PropTypes.string,
  metacritic: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  released: PropTypes.string,
  background_image: PropTypes.string,
  website: PropTypes.string,
  platforms: PropTypes.string,
  developers: PropTypes.string,
  publishers: PropTypes.string,
  esrb_rating: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
}
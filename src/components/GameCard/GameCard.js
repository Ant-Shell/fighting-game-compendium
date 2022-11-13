import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./GameCard.css"

const GameCard = ({ name, slug, background_image }) => {
  return(
      <Link to={`/${slug}`}>
      <div className="card">
        <h2>{name}</h2>
        <img src={background_image} alt={`${name} poster`}></img>
      </div>
      </Link>
  )
}

export default GameCard

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
}
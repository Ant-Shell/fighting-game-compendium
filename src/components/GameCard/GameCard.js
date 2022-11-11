import { Link } from "react-router-dom"
import "./GameCard.css"

const GameCard = ({ id, name, background_image }) => {
  return(
    <div className="card">
      <Link to={`/${id}`}>
      <h2>{name}</h2>
      <img src={background_image} alt={`${name} poster`}></img>
      </Link>
    </div>
  )
}

export default GameCard

import "./GameCard.css"

const GameCard = ({ id, name, background_image }) => {
  return(
    <div className="card">
      <h2>{name}</h2>
      <img src={background_image} alt={`${name} poster`}></img>
    </div>
  )
}

export default GameCard

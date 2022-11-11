import "./SingleGameCard.js"

const SingleGameCard = ( {name, description, metacritic, released, esrb_rating, website} ) => {
  return (
  <div className="single-card" >
  <h2>{name}</h2>
  <p>Description: {description}</p>
  <p>MetaCritic Rating: {metacritic}</p>
  <p>Release Date: {released}</p>
  {/* <p>Platforms: {platforms}</p> */}
  {/* <p>Developers: {}</p> */}
  {/* <p>Publishers: {}</p> */}
  {/* <p>ESRB Rating: {esrb_rating}</p> */}
  <p>Website: {website}</p>
</div>
)
}

export default SingleGameCard
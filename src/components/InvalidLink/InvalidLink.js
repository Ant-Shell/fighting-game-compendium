import { Link } from "react-router-dom"
import "./InvalidLink.css"

const InvalidLink = () => {
  return (
    <div className="error-container">
    <p className="error-message" data-cy='invalid-link'>Page Not Found :(</p>
    <Link to="/"><button>Continue?</button></Link>
    </div>
  )
}

export default InvalidLink
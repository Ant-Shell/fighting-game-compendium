import "./ErrorPage.css"

const ErrorPage = ({ errorMessage }) => {
  return (
    <p className="error-message">Sorry, a {errorMessage} error has occured :(</p>
  )
}

export default ErrorPage
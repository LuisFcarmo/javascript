import "./ErrorMessage.css"

const ErrorMessage = ({msg, type}) => {
  return (
    <div className = {`message ${type}`}>
        <p>{msg}</p>
    </div>
  )
}

export default ErrorMessage
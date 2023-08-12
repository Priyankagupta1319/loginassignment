// Write your code here
import './index.css'

const Message = props => {
  const {message} = props

  return (
    <button type="button" className="button" onClick={message}>
      Logout
    </button>
  )
}

export default Message

// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {
    isloggedin: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isloggedin: !prevState.isloggedin}))
  }

  render() {
    const {isloggedin} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1>Please Login</h1>

          <button type="button" className="button" onClick={this.login}>
            Login
          </button>
          <Message isloggedin={isloggedin} />
          {isloggedin ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home

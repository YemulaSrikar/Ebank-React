import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {userid: '', pin: '', errorMsg: '', isErr: false}

  gotSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  gotFailure = errMsg => {
    this.setState({errorMsg: errMsg, isErr: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userid, pin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {user_id: userid, pin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.gotSuccess(data.jwt_token)
    } else {
      this.gotFailure(data.error_msg)
    }
  }

  onChangeUserId = event => {
    this.setState({userid: event.target.value})
  }

  onChangeUserPin = event => {
    this.setState({pin: event.target.value})
  }

  renderForm = () => {
    const {userid, pin, errorMsg, isErr} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-card">
        <div className="img-cont">
          <img
            className="website-login"
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
        </div>
        <form className="form-cont" onSubmit={this.onSubmitForm}>
          <h1 className="welcome-head">Welcome Back!</h1>
          <div className="labels-inputs-cont">
            <label className="labels" htmlFor="userId">
              User ID
            </label>
            <input
              className="inputs"
              id="userId"
              type="text"
              placeholder="Enter User ID"
              value={userid}
              onChange={this.onChangeUserId}
            />
          </div>
          <div className="labels-inputs-cont">
            <label className="labels" htmlFor="userPin">
              PIN
            </label>
            <input
              className="inputs"
              id="userPin"
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={this.onChangeUserPin}
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          {isErr && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    )
  }

  render() {
    return <div className="login-bg-Main-cont">{this.renderForm()}</div>
  }
}
export default LoginForm

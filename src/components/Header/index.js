import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
  render() {
    const onLogout = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/ebank/login')
    }
    return (
      <div className="head-main-cont">
        <nav className="nav-bar">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <button className="logout-btn" type="button" onClick={onLogout}>
            Logout
          </button>
        </nav>
        <div className="card-cont">
          <h1 className="home-head">Your Flexibility, Our Excellence</h1>
          <img
            className="card-img"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Header)

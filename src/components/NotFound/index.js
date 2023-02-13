import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <Link className="links" to="/bad-path">
    <div className="failure-cont">
      <img
        className="not-found-img"
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-route-img.png"
        alt="not found"
      />
      <h1 className="not-found-head">Page Not Found</h1>
      <p className="not-found-desc">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </Link>
)
export default NotFound

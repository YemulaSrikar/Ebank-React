import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <Link className="links" to="/not-found">
    <div className="failure-cont">
      <img
        className="not-found-img"
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-route-img.png"
        alt="not found"
      />
    </div>
  </Link>
)
export default NotFound

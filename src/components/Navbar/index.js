import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-cont">
      <div className="navbar-cell">
        <Link to="/">Store</Link>
      </div>
    </div>
  )
}

export default Navbar;

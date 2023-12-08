import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';

function Navbar() {
  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar-expand-sm" >
      <ul className='navbar-nav container-fluid'>
        {!Auth.loggedIn() ? (
          <>
            <li className="nav-item ">
              <button className="custom-nav-btn px-3">
                <Link
                  to="/login"
                  className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>
                  Login
                </Link>
              </button>
            </li>
            <li className="nav-item ">
              <button className="custom-nav-btn px-3">
                <Link
                  to="/signup"
                  className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>
                  Signup
                </Link>
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <button className="custom-nav-btn px-3">
                <Link
                  to="/"
                  onClick={Auth.logout}
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                  Logout
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="custom-nav-btn px-3">
                <Link
                  to="/profile"
                  className={currentPage === '/profile' ? 'nav-link active' : 'nav-link'}>
                  Your Shelf
                </Link>
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
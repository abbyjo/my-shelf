import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar-expand-sm" >
    <ul className='navbar-nav container-fluid'>
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
    </ul>
    </nav>
  );
};

export default Navbar;
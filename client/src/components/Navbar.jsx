import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    return (
      <header className="">
        <div className="">
          <Link className="" to="/">
            <h1>myShelf</h1>
          </Link>
          <p>What's on your shelf?</p>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  
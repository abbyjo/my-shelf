import '../styles/Header.css';
import Navbar from './Navbar';
import Search from './Search'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header className="header-div container-fluid">
            <div className="row mb-1">
                <div className="col">
                    <Link to="/">
                        <h1 className="home-link">myShelf</h1>
                    </Link>
                </div>
                <div className="col position-relative text-end">
                    <div className="position-absolute top-0 end-0"> <Navbar /> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9 col-md-9 col">
                    {/* <img className="site-logo" src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg"></img> */}
                </div>
            </div>
        </header>
        <Search />
        </>
    );
};

export default Header;
import '../styles/Header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="header-div container-fluid">
            <div className="row">
                <div className="col">
                    <h1 className="text-start">myShelf</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9 col-md-9 col">
                    <img className="site-logo" src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg"></img>
                </div>
                <div className="col-sm-3 col-md-3 col">
                <Navbar />
                </div>
            </div>
        </header>
    );
};

export default Header;
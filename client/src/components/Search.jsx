import { Link, useLocation } from 'react-router-dom';
const styles = {
    div: {
        background: "hotpink",
    }
};

function Search() {
    return(
        <div style={styles.div} className="p-2">
          <form className="d-flex" role="search">
            <input className="form-control m-2" type="search" placeholder="What's on your shelf?" aria-label="Search" />
            <button className="px-5" type="submit">Search</button>
          </form>  
        </div>
    )
};


export default Search;
import { Link, useLocation } from 'react-router-dom';
const styles = {
    div: {
        background: "#FFBE28",
    }
};

function Search() {
    return(
        <div style={styles.div} className="p-2">
          <form className="d-flex justify-content-center" role="search">
            <input className="form-control m-2 w-50" type="search" placeholder="What's on your shelf?" aria-label="Search" />
            <button className="px-5" type="submit">Search 👀</button>
          </form>  
        </div>
    )
};


export default Search;
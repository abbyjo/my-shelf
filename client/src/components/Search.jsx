import { Link, useLocation } from 'react-router-dom';
const styles = {
    div: {
        background: "#FFBE28",
    },
    heading: {
      color: "black"
    }
};

function Search() {
    return(
        <div style={styles.div} className="p-2">
          {/* <form className="d-flex justify-content-center" role="search">
            <input className="form-control m-2 w-50" type="search" placeholder="What's on your shelf?" aria-label="Search" />
            <button className="px-5" type="submit">Search 👀</button>
          </form>   */}
          <h1 style={styles.heading} className="text-center py-3 pb-1">What's on your shelf?</h1>
        </div>
    )
};


export default Search;
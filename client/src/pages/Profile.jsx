import { getMe, deleteComic } from '../utils/api';

import ComicCard from '../components/ComicCard';
import RssFeed from '../components/RssFeed';

import '../styles/Profile.css';

const Profile = () => {

    return (
      <main>
        <div className= "w-75 d-flex">
          <section className="row bg-secondary m-5 justify-content-between">
            <div className="col">
              <img className="reader-icon" src="https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg" />
            </div>
            <div className="col m-3">
              <h3 className="mb-3">USERNAME's Shelf</h3>
              <h5>Reading # comics</h5>
            </div>
          </section>
          {/* map this section */}
          <section className="row">
            <div className="col-6">
              {/* div for spacing */}
            </div>
          </section>
        </div>
        <section className= "">
          <div className="row bg-secondary m-5 justify-content-around">
            <div className="col m-3">
              <h3 className="mb-3">My Comics</h3>
              <h5>Reading # comics</h5>
              {/* maybe put a comic scroller here with new search parameters... */}
            </div>
            <div className="col m-3">
              <h3 className="mb-3">What's new?</h3>
              <h5>Reading # comics</h5>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Profile;
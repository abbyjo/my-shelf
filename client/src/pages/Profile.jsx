import { useState, useEffect } from 'react';
import ComicCard from '../components/ComicCard';
import RssFeed from '../components/RssFeed';

import { getMe, deleteComic, getOneComic } from '../utils/api';
import Auth from '../utils/auth';

import '../styles/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) { return false }

      const response = await getMe(token);
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const user = await response.json();
        setUserData(user);
    } catch (err) {
      console.error(err)
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  const savedComics = JSON.stringify(userData.savedComics) // WIP- need to figure out how to access info as an array
    return (
      <main>
        <div className= "w-75 d-flex">
          <section className="row bg-secondary m-5 justify-content-between">
            <div className="col">
              <img className="reader-icon" src={userData.icon} />
            </div>
            <div className="col m-3">
              <h3 className="mb-3">{userData.username}'s Shelf</h3>
              <h5>
                {userData.comicCount>=1 ? (
                  `Has ${userData.comicCount} ${userData.comicCount === 1 ? 'comic' : 'comics'}`
                ) : ( `Needs some comics!`)}
              </h5>
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
              <h5>COVER GO HERE</h5>
              {/* maybe put a comic scroller here with new search parameters... */}
              {console.log(typeof savedComics)}
              {savedComics}
            </div>
            <div className="col m-3">
              <h3 className="mb-3">What's new?</h3>
              <h5>RSS FEEDS GO HERE</h5>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Profile;
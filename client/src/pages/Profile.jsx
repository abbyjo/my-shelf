import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ComicCard from '../components/ComicCard';
import RssFeed from '../components/RssFeed';

import { saveComicIDs, getSavedComicIDs, removeComicIDs } from '../utils/localStorage';
import { getMe, deleteComic, getOneComic } from '../utils/api';
import Auth from '../utils/auth';

import '../styles/Profile.css';

const Profile = () => {

  const [userData, setUserData] = useState({});
  // const [savedComicIDs, setsavedComicIDs] = useState(getSavedComicIDs());
  const [myComicData, setMyComicData] = useState([]);
  const [loaded, setLoad] = useState(false);

  const getUserData = async () => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) { return false }

      const response = await getMe(token);
      if (!response.ok) {
        throw new Error('Get User API call failed.');
      }
      const user = await response.json();
      setUserData(user);
      setLoad(true)

    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    getUserData()
  }, []);

  return (
    <main>
      <div className="w-75 d-flex">
        <section className="row bg-secondary m-5 justify-content-between">
          <div className="col">
            <img className="reader-icon" src={userData.icon} />
          </div>
          <div className="col m-3">
            <h3 className="mb-3">{userData.username}'s Shelf</h3>
            <h5>
              {userData.comicCount >= 1 ? (
                `Has ${userData.comicCount} ${userData.comicCount === 1 ? 'comic' : 'comics'}`
              ) : (`Needs some comics!`)}
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
      <section className="">
        <div className="row bg-secondary m-5 justify-content-around">
          <div className="col m-3">
            <h3 className="mb-3">My Comics</h3>
              {loaded ?
                <>
                  {userData.savedComics.map((comic) => {
                    return (
                      <>
                        <ComicCard
                          src={comic.cover}
                          title={<Link to={`/comic/${comic._id}`}>{comic.title}</Link>} />
                      </>
                    )
                  })}
                </>
                : (<p>Loading...</p>)}
          </div>
          <div className="col m-3">
            <h3 className="mb-3 text-end">What's new?</h3>
            
            {loaded ? (
              <>
              {userData.savedComics.map((comic) => {
                return(
                  <div>
                    <h4 className="text-center mb-3">{comic.title}</h4>
                    <RssFeed url={comic.rss} reload={loaded} />
                    <p></p>
                  </div>
                )
              })}
              </>
            ): ( <p>loading...</p>)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
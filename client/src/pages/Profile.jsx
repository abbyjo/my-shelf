import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ComicCard from '../components/ComicCard';
import RssFeed from '../components/RssFeed';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FallingLines } from 'react-loader-spinner'

import { saveComicIDs, getSavedComicIDs, removeComicIDs } from '../utils/localStorage';
import { getMe, deleteComic, getOneComic } from '../utils/api';
import Auth from '../utils/auth';

import '../styles/Profile.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Profile = () => {

  const [userData, setUserData] = useState({});
  const [savedComicIDs, setsavedComicIDs] = useState([]);
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
      setLoad(true);
      syncComics();

    } catch (err) {
      console.error(err)
    }
  };

  // Function to get saved comics from db upon first visiting login page
  const syncComics = async () => {
      let dbComics = await userData.savedComics;
      let myComics = [];
      dbComics.forEach((comic)=> {myComics.push(comic._id)});
      setsavedComicIDs(myComics);
      saveComicIDs(savedComicIDs);
      console.log(savedComicIDs);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <main>
      <div className="w-75 d-flex">
        <section className="row m-5 text-center justify-content-between lib-card">
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

        <section className="row">
          <div className="col-6">
            {/* div for spacing */}
          </div>
        </section>
      </div>
      {/* This section is "below the fold" - comic data goes here*/}
      <section className="text-center">
        <h3 className="mb-3">My Comics</h3>
        {loaded ?
          <Carousel
            swipeable={true}
            draggable={true}
            // centerMode={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px align-items-start"
          >
            {userData.savedComics.map((comic) => {
              return (
                <ComicCard
                  key={comic._id}
                  src={comic.cover}
                  title={<Link to={`/comic/${comic._id}`}>{comic.title}</Link>} />
              )
            })}
          </Carousel>
          : (<FallingLines
            color="#F34213"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
          />)}

        <div className="m-3">
          <h3 className="m-5">What's new?</h3>

          {loaded ? (
            <>
              {userData.savedComics.map((comic) => {
                return (
                  <div key={comic._id}>
                    <h4 className="text-center mb-3">{comic.title}</h4>
                    <RssFeed url={comic.rss} reload={loaded} />
                  </div>
                )
              })}
            </>
          ) : (<FallingLines
            color="#F34213"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
          />)}
        </div>

      </section>
    </main>
  );
};

export default Profile;
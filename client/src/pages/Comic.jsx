import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import RssFeed from '../components/RssFeed';
import { FallingLines } from 'react-loader-spinner'

import Auth from '../utils/auth';
import { saveComic, getOneComic } from '../utils/api';
import { saveComicIDs, getSavedComicIDs } from '../utils/localstorage';

import '../styles/ComicPage.css';

const Comic = () => {
  let {comicID} = useParams();

  const [loaded, setLoad] = useState(false);
  const [oneComic, setComicData] = useState([]);
  const [savedComicIDs, setsavedComicIDs] = useState(getSavedComicIDs());
  
  const handleSaveComic = async () => {
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) { return false }

    try {
      const response = await saveComic(oneComic, token);

      if (!response.ok) {
        
        throw new Error('Save Comic API route failed');
      }
      setsavedComicIDs([...savedComicIDs, oneComic._id]);
      console.log("comic saved!")
    } catch (err) {
      console.error(err);
    }
    
  };

  const getComicData = async () => {
    try {
      const response = await getOneComic(comicID);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const comic = await response.json();
      setComicData(comic);
      setLoad(true);
    } catch (err) {
      console.error(err);
    }
  };
// Functions that run when component loads 
  useEffect(() => {
    getComicData();
  }, []);

// Saves comic IDS to local storage when component unmounts
  useEffect(() => {
    return () => saveComicIDs(savedComicIDs);
  });
   
  return (
    <section>
      <div className="container text-center p-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 pe-5">
            <img className="title-img img-fluid" src={oneComic.cover}></img>
          </div>
          <div className="col-sm-12 col-md-6 text-wrap">
            <h2> {oneComic.title} </h2>
            <h5> Created by <Link to={oneComic.authorLink} target="_blank" rel="noopener noreferrer"> {oneComic.authors}</Link> </h5>
            {Auth.loggedIn() ?
              (
                <button onClick={() => handleSaveComic()}
                className={savedComicIDs?.some((comicID) => comicID === oneComic._id) ? 'btn btn-warning disabled' : 'btn btn-warning'}>
                  {savedComicIDs?.some((comicID) => comicID === oneComic._id) ? 'Shelved' : 'Add to Shelf'}
                </button>
              ) : (
                <> </>
              )}
            <p className="mt-4 comic-about"> {oneComic.description}</p>
            <div>
              <h5 className='flavor-text'>Genres</h5>
              {loaded ? (
                <ul className="list-group list-group-horizontal">
                  {oneComic.genre.map((genre) => {
                    return (
                      <p className='list-group-item flex-fill'>{genre}</p>
                    )
                  })}
                </ul>
              ) : (<FallingLines
                color="#F34213"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
              />)
              }
              <h5 className='flavor-text'>Tags</h5>
              {loaded ? (
                <ul className="list-group">
                  {oneComic.tags.map((tag) => {
                    return (
                      <p className='list-group-item mb-2'>{tag}</p>
                    )
                  })}
                </ul>
              ) : (<FallingLines
                color="#F34213"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
              />)
              }
              <button className="btn btn-warning custom-archive-button"><a 
              href={oneComic.homepage}
              target="_blank"
              rel="noopener noreferrer">
                <h5>Full Archive</h5>
              </a></button>
            </div>
          </div>
        </div>
        <div className="row p-5 m-3">
          <div className="col">
            <h5 className='mb-4'>Latest Updates</h5>
            { loaded ? ( 
              <RssFeed url={oneComic.rss} reload={oneComic}/>
            ): (
              <FallingLines
            color="#F34213"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
          />
            )
              }
          </div>
        </div>

      </div>


    </section>
  );
};
  
  export default Comic;
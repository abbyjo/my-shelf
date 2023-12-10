import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import RssFeed from '../components/RssFeed';

import Auth from '../utils/auth';
import { saveComic, getOneComic } from '../utils/api';
import { saveComicIDs, getSavedComicIDs } from '../utils/localStorage';

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
          <div className="col-sm-12 col-md-6">
            <img className="title-img img-fluid" src={oneComic.cover}></img>
          </div>
          <div className="col-sm-12 col-md-6 text-wrap">
            <h2> {oneComic.title} </h2>
            <h5> Created by <Link to={oneComic.authorLink} target="_blank" rel="noopener noreferrer"> {oneComic.authors}</Link> </h5>
            {Auth.loggedIn() ?
              (
                <button onClick={() => handleSaveComic()}
                className={savedComicIDs?.some((comicID) => comicID === oneComic._id) ? 'btn btn-info disabled' : 'btn btn-info'}>
                  {savedComicIDs?.some((comicID) => comicID === oneComic._id) ? 'Shelved' : 'Add to Shelf'}
                </button>
              ) : (
                <> </>
              )}
            <p className="mt-4"> {oneComic.description}</p>
            <div>
              <h5> Genres List </h5>
              <h5>TAG LIST</h5>
              <a href={oneComic.homepage} target="_blank" rel="noopener noreferrer"><h5>Full Archive</h5></a>
            </div>
          </div>
        </div>
        <div className="row p-5 m-3">
          <div className="col">
            <h5>Latest Updates</h5>
            { loaded ? ( 
              <RssFeed url={oneComic.rss} reload={oneComic}/>
            ): (
              <p>LOADING...</p>
            )
              }
          </div>
        </div>

      </div>


    </section>
  );
};
  
  export default Comic;
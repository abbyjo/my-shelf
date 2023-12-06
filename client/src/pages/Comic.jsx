import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { saveComic, removeComic, getOneComic } from '../utils/api';
import RssFeed from '../components/RssFeed';

import '../styles/ComicPage.css';

const Comic = () => {
  let {comicID} = useParams();
  const [oneComic, setComicData] = useState([]);
  useEffect(() => {
      const getComicData = async () => {
        try {
          const response = await getOneComic(comicID);
  
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
  
          const comic = await response.json();
          setComicData(comic);
        } catch (err) {
          console.error(err);
        }
      };
      getComicData();
    }, []);
    // const genreCloud= [];
    // function genreData(){
    //   oneComic.genre.forEach(item => {
    //     genreCloud.push(item);
    //     console.log(genreCloud)
    //   });
    // }

  return (
    <section>
      <div className="container text-center p-5">
        <div className="row">
          <div className="col-sm-8 col-md-6">
            {/* <ComicCard
              src={oneComic.cover}
            /> */}
            <img className="title-img img-fluid" src={oneComic.cover}></img>
          </div>
          <div className="col-sm-2 col-md-6 text-wrap">
            <h2> {oneComic.title} </h2>
            <h5> Created by <Link to={oneComic.authorLink} target="_blank" rel="noopener noreferrer"> {oneComic.authors}</Link> </h5>
            <p className="mt-4"> {oneComic.description}</p>
            <div>
              <h5> Genres List </h5>
              <h5>TAG LIST</h5>
            </div>
          </div>
        </div>
        <div className="row p-5 m-3">
          <div className="col">
            <h5>Latest Updates</h5>
            <p >RSS component will go here </p>
            <RssFeed />
          </div>
        </div>

      </div>


    </section>
  );
};
  
  export default Comic;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ComicCard from './ComicCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getComics } from '../utils/api';

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

function ComicScroll() {
    const [comics, setComicData] = useState([]);
    useEffect(() => {
        const getArchive = async () => {
          try {
            const response = await getComics();
    
            if (!response.ok) {
              throw new Error('something went wrong!');
            }
    
            const comics = await response.json();
            setComicData(comics);
          } catch (err) {
            console.error(err);
          }
        };
    
        getArchive();
      }, []);

    return (
        <div>
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
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px align-items-start"
            >
                {comics.map((comic)=> {
                    return (
                        <ComicCard
                    key={comic._id} 
                    src={comic.cover}
                    title={<Link to={`/comic/${comic._id}`}>{comic.title}</Link>}              
                    />)
                })}
            </Carousel>;
        </div>
    )
};

export default ComicScroll;
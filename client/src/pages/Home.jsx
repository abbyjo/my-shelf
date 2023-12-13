import Search from '../components/Search';
import ComicScroll from '../components/ComicScroll';

const Home = () => {

    return (
      <main>
        
        {/* <h4 className="text-center mt-5">Recently Added Webcomics</h4> */}
        <div className="mt-5"></div>
        <ComicScroll 
          sort="first"
        />
        <ComicScroll 
          sort="last"
        />
      </main>
    );
  };
  
  export default Home;
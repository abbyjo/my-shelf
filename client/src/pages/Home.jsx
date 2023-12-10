import Search from '../components/Search';
import ComicScroll from '../components/ComicScroll';

const Home = () => {

    return (
      <main>
        <Search />
        <h4 className="text-center mt-5">Recently Added Webcomics</h4>
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
import Search from '../components/Search';
import ComicScroll from '../components/ComicScroll';

const Home = () => {

    return (
      <main>
        <Search />
        <ComicScroll 
          sort="popular"
        />
        <ComicScroll 
          sort= "recent"
        />
      </main>
    );
  };
  
  export default Home;
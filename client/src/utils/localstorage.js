export const getSavedComicIDs = () => {
    const savedComicIDs = localStorage.getItem('saved_comics')
      ? JSON.parse(localStorage.getItem('saved_comics'))
      : [];
  
    return savedComicIDs;
  };
  
  export const saveComicIDs = (comicArray) => {
    if (comicArray.length) {
      localStorage.setItem('saved_comics', JSON.stringify(comicArray));
    } else {
      localStorage.removeItem('saved_comics');
    }
  };
  
  export const removeComicIDs = (comicID) => {
    const savedComicIDs = localStorage.getItem('saved_comics')
      ? JSON.parse(localStorage.getItem('saved_comics'))
      : null;
  
    if (!savedComicIDs) {
      return false;
    }
  
    const updatedComics = savedComicIDs?.filter((savedBookId) => savedBookId !== comicID);
    localStorage.setItem('saved_comics', JSON.stringify(updatedComics));
  
    return true;
  };
  
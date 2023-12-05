// Gets logged in user's info (needs a token)
export const getMe = (token) => {
    return fetch('/api/readers/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
};
  
// Creates new reader account
export const createReader = (userData) => {
    return fetch('/api/readers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
};
  
// Logs in user
export const loginUser = (userData) => {
    return fetch('/api/readers/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
};
  
//COMIC ROUTES ===========================>

// 1. USER RELATED ======> 
// Saves comic to logged in reader's acct
export const saveComic = (comicData, token) => {
    return fetch('/api/readers', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comicData),
    });
};
  
// remove saved book data for a logged in user
export const removeComic = (comicID, token) => {
    return fetch(`/api/users/books/${comicID}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
}; 

// 2. ARCHIVE RELATED ======>

// Add new comic to archives 
export const addComic = (comicData) => {
    return fetch('/api/comics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comicData),
    });
};

// Gets all comics in archive
export const getComics = () => {
    return fetch('/api/comics', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
};

// Get single comic by ID
export const getOneComic = (comicID) => {
    return fetch(`/api/comics/${comicID}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
};
  
// Delete comic from archives 
export const deleteComic = (comicID) => {
    return fetch(`/api/comics/${comicID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
};

// Edit comic information
export const editComic = (comicID, comicData) => {
    return fetch(`/api/comics/${comicID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comicData)
    });
};
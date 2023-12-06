const router = require('express').Router();

const {
  createComic,
  getComics,
  getMyComic,
  editComic,
  removeComic,
  getRSS  
} = require('../../controllers/comic-controllers');

// "myshelf.com/api/comics"
// Gets all comics, Adds new comic to database
router.route('/').get(getComics).post(createComic);

// "myshelf.com/api/comics/:comicID"
// Search by comic-id: gets, edits or deletes one comic (from DB)
router.route('/:comicID').get(getMyComic).put(editComic).delete(removeComic);

// "myshelf.com/api/comics/:comicID/RSS"
// Gets recent rss feed data from one comic
router.route('/:comicID/rss').post(getRSS)

module.exports = router;
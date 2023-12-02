const router = require('express').Router();

const {
  createComic,
  getComics,
  getMyComic,
  editComic,
  removeComic,  
} = require('../../controllers/comic-controllers');

// "myshelf.com/api/comics"
// Gets all comics, Adds new comic to database
router.route('/').get(getComics).post(createComic);

// "myshelf.com/api/comics/:comic-id"
// Search by comic-id: gets, edits or deletes one comic (from DB)
router.route('/:comic-id').get(getMyComic).put(editComic).delete(removeComic);

module.exports = router;
const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');

const {
  createReader,
  getReaders,
  getMyReader,
  editReader,
  saveComic,
  removeComic,
  login,
} = require('../../controllers/reader-controllers');

// "myshelf.com/api/readers"
// Gets all readers, creates new reader
// If logged in: edits reader acct info or adds a comic to reader's shelf
router.route('/').get(getReaders).post(createReader).put(authMiddleware, saveComic);

// "myshelf.com/api/readers/login"
// Logs in reader
router.route('/login').post(login);

// "myshelf.com/api/readers/me"
// Gets logged in user's specific information
router.route('/me').get(authMiddleware, getMyReader);

// "myshelf.com/api/readers/:readerID"
// Gets a specific reader's data by ID 
router.route('/:readerID').get(getMyReader).put(editReader);

// "myshelf.com/api/readers/:comicID"
// By comic-id: if logged in, removes specific comic by ID (from reader's shelf)
router.route('/:comicID').delete(authMiddleware, removeComic);

module.exports = router;
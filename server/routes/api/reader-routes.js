const router = require('express').Router();

const {
  createReader,
  getReaders,
  getMyReader,
  editReader,
  saveComic,
  removeComic,
  login,
} = require('../../controllers/reader-controllers');

// TODO: create middleware function for auth
const { authMiddleware } = require('../../utils/auth');

// "myshelf.com/api/readers"
// Gets all readers, creates new reader
// If logged in: edits reader acct info or adds a comic to reader's shelf
router.route('/').get(getReaders).post(createReader).put(authMiddleware, editReader, saveComic);

// "myshelf.com/api/readers/login"
// Logs in reader
router.route('/login').post(login);

// "myshelf.com/api/readers/me"
// Gets logged in user's specific information
router.route('/me').get(authMiddleware, getMyReader);

// "myshelf.com/api/readers/:reader-id"
// Gets a specific reader's data by ID 
router.route('/:reader-id').get(getMyReader);

// "myshelf.com/api/readers/:reader-id"
// By comic-id: if logged in, removes specific comic by ID (from reader's shelf)
router.route('/:comic-id').delete(authMiddleware, removeComic);

module.exports = router;
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
router.route('/').get(getReaders).post(createReader).put(authMiddleware, editReader, saveComic);

// "myshelf.com/api/readers/login"
router.route('/login').post(login);

// "myshelf.com/api/readers/me"
router.route('/me').get(authMiddleware, getMyReader);

// "myshelf.com/api/readers/:reader-id"
router.route('/:reader-id').delete(authMiddleware, removeComic);

module.exports = router;
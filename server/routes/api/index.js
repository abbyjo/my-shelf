const router = require('express').Router();
const readerRoutes = require('./reader-routes');
const comicRoutes = require('./comic-routes');
const authorRoutes = require('./author-routes');

router.use('/readers', readerRoutes);
router.use('/comics', comicRoutes);
router.use('/authors', authorRoutes);

module.exports = router;
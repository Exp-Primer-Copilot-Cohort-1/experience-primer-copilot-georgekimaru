// Create web server

// Import controllers
const commentController = require('../controllers/commentController');

// Import middlewares
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');

// Routes
router.get('/:id', commentController.getComments);
router.post('/:id', auth, commentController.postComment);
router.post('/upload/:id', auth, upload.single('image'), commentController.uploadImage);
router.post('/delete/:id', auth, commentController.deleteComment);

// Export router
module.exports = router;
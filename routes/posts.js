const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.list);
router.get('/:id', postController.detail);

module.exports = router;

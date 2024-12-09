const express = require('express');
const {
  createComment,
  updateComment,
  getComments,
  getComment,
  deleteComment,
} = require('../controllers/comments.controller');
const { validateComment } = require('../validators/main.validator');
const router = express.Router();

router.post('/create', validateComment, createComment);
router.get('/', getComments);
router.get('/:id', getComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;

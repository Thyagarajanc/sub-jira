const commentService = require('../services/comments.service');

const createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(req);
    res.json({ comment });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await commentService.getComments(req);
    res.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

const getComment = async (req, res) => {
  try {
    const comment = await commentService.getComment(req);
    res.json({ comment });
  } catch (error) {
    console.error('Error fetching comment:', error);
    res.status(500).json({ error: 'Failed to fetch comment' });
  }
};

const updateComment = async (req, res) => {
  try {
    console.log('update comment');
    const comment = await commentService.updateComment(req);
    res.json({ comment });
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ error: 'Failed to update comment' });
  }
};

const deleteComment = async (req, res) => {
  try {
    console.log('delete comment');
    const comment = await commentService.deleteComment(req);
    res.json({ comment });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Failed to delete comment' });
  }
};

module.exports = { createComment, getComments, getComment, updateComment, deleteComment };

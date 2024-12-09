const commentsModel = require('../models/comments.model');

const createComment = async (req) => {
  try {
    const comment = await commentsModel.create(req.body);
    return comment;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

const getComments = async (req) => {
  try {
    const comments = await commentsModel.all();
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

const getComment = async (req) => {
  try {
    const { id } = req.params;
    const comment = await commentsModel.get(id);
    return comment;
  } catch (error) {
    console.error('Error fetching comment:', error);
    throw error;
  }
};

const updateComment = async (req) => {
  try {
    const { id } = req.params;
    const params = req.body;
    delete params.id;

    const comment = await commentsModel.update(id, params);
    return comment;
  } catch (error) {
    console.error('Error updating comment:', error);
    throw error;
  }
};

const deleteComment = async (req) => {
  try {
    const { id } = req.params;
    const comment = await commentsModel.delete(id);
    return comment;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
};

module.exports = { createComment, getComments, getComment, updateComment, deleteComment };

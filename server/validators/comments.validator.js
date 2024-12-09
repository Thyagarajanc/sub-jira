const Joi = require('joi');

const commentValidator = Joi.object({
  content: Joi.string().min(1).max(300).required().messages({
    'string.empty': 'Content is required',
    'string.min': 'Content must be at least 1 character long',
    'string.max': 'Content must not exceed 300 characters',
  }),
  taskId: Joi.string().required().messages({
    'string.empty': 'Task ID is required',
  }),
  userId: Joi.string().required().messages({
    'string.empty': 'User ID is required',
  }),
});

module.exports = { commentValidator };

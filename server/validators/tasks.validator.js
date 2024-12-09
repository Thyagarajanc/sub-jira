const Joi = require('joi');

const taskValidator = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    'string.empty': 'Title is required',
    'string.min': 'Title must be at least 3 characters long',
    'string.max': 'Title must not exceed 100 characters',
  }),
  description: Joi.string().optional().allow('').max(500).messages({
    'string.max': 'Description must not exceed 500 characters',
  }),
  status: Joi.string().valid('pending', 'in-progress', 'completed').default('pending'),
  dueDate: Joi.date().optional().greater('now').messages({
    'date.greater': 'Due date must be a future date',
  }),
  assignedTo: Joi.string().optional().messages({
    'string.empty': 'Assigned To must be a valid user ID',
  }),
});

module.exports = { taskValidator };

const { userValidator } = require('./user.validator');
const { taskValidator } = require('./tasks.validator');
const { commentValidator } = require('./comments.validator');

const validateUser = (req, res, next) => {
  const { error } = userValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateTask = (req, res, next) => {
  const { error } = taskValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateComment = (req, res, next) => {
  const { error } = commentValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateUser, validateTask, validateComment };

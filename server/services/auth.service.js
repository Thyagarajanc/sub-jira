const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const registerUser = async (req) => {
  const { name, email, password } = req.body;

  const existingUser = await userModel.findByEmail(email);
  if (existingUser) {
    throw new Error('User already exists with this email.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({ name, email, password_hash: hashedPassword });
  return user;
};

const loginUser = async (req) => {
  const { email, password } = req.body;

  const user = await userModel.findByEmail(email);
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password_hash);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password.');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { user, token };
};

module.exports = { registerUser, loginUser };

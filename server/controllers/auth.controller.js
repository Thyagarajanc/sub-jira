const authService = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await authService.loginUser(req);
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { register, login };

const userService = require('../services/user.service');
const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req);
    res.json({ user });
  } catch (error) {}
};
const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req);
    res.json({ user });
  } catch (error) {}
};
const updateUser = async (req, res) => {
  try {
    console.log('update');
    const user = await userService.updateUser(req);
    res.json({ user });
  } catch (error) {}
};
const deleteUser = async (req, res) => {
  try {
    console.log('delete');
    const user = await userService.deleteUser(req);
    res.json({ user });
  } catch (error) {}
};

module.exports = { createUser, getUser, updateUser, deleteUser };

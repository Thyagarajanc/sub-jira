const userModel = require('../models/user.model');

const createUser = async (req) => {
  try {
    const user = await userModel.create(req.body);
    return user;
  } catch (error) {}
};
const getUser = async (req) => {
  try {
    const { id } = req.params;
    const user = await userModel.get(id);
    return user;
  } catch (error) {}
};
const updateUser = async (req) => {
  try {
    const { id } = req.params;
    console.log(id, req.body);
    const userId = parseInt(id);
    const params = req.body;
    delete params.id;

    const user = await userModel.update(userId, params);
    return user;
  } catch (error) {}
};

const deleteUser = async (req) => {
  try {
    const { id } = req.params;
    console.log(id, req.body);
    const userId = parseInt(id);
    const user = await userModel.delete(userId);
    return user;
  } catch (error) {}
};

module.exports = { createUser, getUser, updateUser, deleteUser };

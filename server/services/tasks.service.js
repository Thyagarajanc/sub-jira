const tasksModel = require('../models/tasks.model');

const createTask = async (req) => {
  try {
    const task = await tasksModel.create(req.body);
    return task;
  } catch (error) {}
};
const getTasks = async (req) => {
  try {
    const tasks = await tasksModel.all();
    return tasks;
  } catch (error) {}
};
const getTask = async (req) => {
  try {
    const { id } = req.params;
    const task = await tasksModel.get(id);
    return task;
  } catch (error) {}
};
const updateTask = async (req) => {
  try {
    const { id } = req.params;
    const params = req.body;
    delete params.id;

    const task = await tasksModel.update(id, params);
    return task;
  } catch (error) {}
};

const deleteTask = async (req) => {
  try {
    const { id } = req.params;
    const task = await tasksModel.delete(id);
    return task;
  } catch (error) {}
};

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask };

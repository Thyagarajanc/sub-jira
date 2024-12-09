const taskService = require('../services/tasks.service');
const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req);
    res.json({ task });
  } catch (error) {}
};
const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks(req);
    res.json({ tasks });
  } catch (error) {}
};
const getTask = async (req, res) => {
  try {
    const task = await taskService.getTask(req);
    res.json({ task });
  } catch (error) {}
};
const updateTask = async (req, res) => {
  try {
    console.log('update');
    const task = await taskService.updateTask(req);
    res.json({ task });
  } catch (error) {}
};
const deleteTask = async (req, res) => {
  try {
    console.log('delete');
    const task = await taskService.deleteTask(req);
    res.json({ task });
  } catch (error) {}
};
module.exports = { createTask, getTasks, getTask, updateTask, deleteTask };

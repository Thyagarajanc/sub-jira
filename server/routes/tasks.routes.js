const express = require('express');
const { getTasks, createTask, updateTask, getTask, deleteTask } = require('../controllers/tasks.controller');
const { validateTask } = require('../validators/main.validator');
const router = express.Router();

router.post('/create', validateTask, createTask);
router.put('/:id/update', updateTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.delete('/:id', deleteTask);

module.exports = router;

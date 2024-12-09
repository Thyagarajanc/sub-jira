const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/users.controller');
const { validateUser } = require('../validators/main.validator');
const router = express.Router();

router.post('/create', validateUser, createUser);
router.put('/:id/update', updateUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);

module.exports = router;

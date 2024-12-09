const express = require('express');
const { deleteOrg } = require('../controllers/admin.controller');
const { deleteProject } = require('../controllers/projects.controller');
const router = express.Router();

router.delete('/orgs/:id', deleteOrg);
router.delete('/projects/:id', deleteProject);

module.exports = router;

const express = require('express');
const {
  createproject,
  updateProject,
  getProject,
  getProjects,
  deleteProject,
} = require('../controllers/projects.controller');

const router = express.Router();

router.post('/create', createproject);
router.put('/:id/update', updateProject);
router.get('/', getProjects);
router.get('/:id', getProject);
router.delete('/:id', deleteProject);

module.exports = router;

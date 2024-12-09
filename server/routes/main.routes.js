const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');
const projectsRoutes = require('./projects.routes');
const tasksRoutes = require('./tasks.routes');
const commentsRoutes = require('./comments.routes');
const adminRoutes = require('./admin.routes');
const authRoutes = require('./auth.routes');
const authenticateToken = require('../middlewares/authenticateToken');

router.use('/users', authenticateToken, userRoutes);
router.use('/projects', authenticateToken, projectsRoutes);
router.use('/tasks', authenticateToken, tasksRoutes);
router.use('/comments', authenticateToken, commentsRoutes);
router.use('/admin', authenticateToken, adminRoutes);
router.use('/auth', authRoutes);

module.exports = router;

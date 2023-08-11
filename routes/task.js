const express = require('express');
const router = express.Router();

const taskApi = require('../controllers/task');

router.get('/api/v1/tasks', taskApi.getAllTask);
router.post('/api/v1/tasks', taskApi.createTask);
router.get('/api/v1/tasks/:id', taskApi.getTask);
router.put('/api/v1/tasks/:id', taskApi.updateTask);
router.delete('/api/v1/tasks/:id', taskApi.deleteTask);

module.exports = router;
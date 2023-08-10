const express = require('express');
const router = express.Router();

const taskApi = require('../controllers/task');

router.get('/api/v1/tasks', taskApi.getAllTask);
router.post('/api/v1/task', taskApi.createTask);
router.get('/api/v1/task/:id', taskApi.getTask);
router.put('/api/v1/task/:id', taskApi.updateTask);
router.delete('/api/v1/task/:id', taskApi.deleteTask);

module.exports = router;
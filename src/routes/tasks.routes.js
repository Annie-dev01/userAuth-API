const express = require('express');
const authMiddleware = require("../middlewares/auth");
const tasksControllers = require("../controllers/tasks.controllers");

const router = express.Router();


router.post('/createTask', authMiddleware.authenticate, tasksControllers.createTask);
router.get('/getAllTasks', tasksControllers.getAllTasks);
router.get('/', tasksControllers.getTask);
router.put('/', tasksControllers.updateTask);
router.delete('/', tasksControllers.deleteTask);


module.exports = router;
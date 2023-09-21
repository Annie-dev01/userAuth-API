const Task = require('../models/tasks.model')
const responses = require("../utils/responses");


// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = await Task.create({
      title,
      description,
      dueDate,
    });
    return responses.buildSuccessResponse('Task created successfully', 201, task);
  } catch (error) {
    console.error(error);
    return responses.buildFailureResponse('Failed to create task', 500);
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    return responses.buildSuccessResponse('Successfully fetched all tasks', 200, tasks);
  } catch (error) {
    console.error(error);
    return responses.buildFailureResponse('Failed to fetch tasks', 500);
  }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return responses.buildFailureResponse('Task not found', 404);
    }
    return responses.buildSuccessResponse('Task found', 200, task);
  } catch (error) {
    console.error(error);
    return responses.buildFailureResponse('Failed to fetch task', 500);
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return responses.buildFailureResponse('Task not found', 404);
    }
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    await task.save();
    return responses.buildSuccessResponse('Task updated successfully', 200, task);
  } catch (error) {
    console.error(error);
    return responses.buildFailureResponse('Failed to update task', 500);
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return responses.buildFailureResponse('Task not found', 404);
    }
    await task.destroy();
    return responses.buildSuccessResponse('Task deleted successfully', 200, task);
  } catch (error) {
    console.error(error);
    return responses.buildFailureResponse('Failed to delete task', 500);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};

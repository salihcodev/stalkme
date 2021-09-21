// pkgs:
import express from 'express';

// utils:
import {
    // searchInAllTasks,
    getSingleTasks,
    createNewTask,
    deleteTask,
    updateTask,
    getTasks,
} from '../controllers/task.controller';

import authMiddleware from '../common/middleware/auth.middleware';

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET
// router.get(`/all/search`, authMiddleware, searchInAllTasks);
router.get(`/all`, authMiddleware, getTasks);
router.get(`/s/:id`, authMiddleware, getSingleTasks);

// POST
router.post(`/`, authMiddleware, createNewTask);

// DELETE
router.delete(`/:id`, authMiddleware, deleteTask);

// PATCH
router.patch(`/:id`, authMiddleware, updateTask);

export default router;

// pkgs:
import mongoose from 'mongoose';
import { Request, Response } from 'express';

// utils:
import Task from '../models/task.model';

// task CRUD controllers: searchInAllTasks
// >>>> read
// READ ALL:
export const getTasks = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req;
    const { page } = req.query;

    if (!userId) res.status(401).json({ message: `Unauthenticated!!` });
    try {
        const LIMIT = 6;
        // get the starting index of every page
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await Task.countDocuments({});

        const Tasks = await Task.find({ author: userId })
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);

        res.json({
            tasks: Tasks,
            currentPage: Number(page),
            pagesCount: Math.ceil(total / LIMIT),
        });
    } catch (err) {
        res.status(404).json({
            message: `Could not find any tasks.`,
            error: err,
        });
    }
};

// READ LAST TWO:
export const getLastTwoTasks = async (
    req: Request,
    res: Response
): Promise<void> => {};

// >>>> create
export const createNewTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    if (!req.userId) res.status(401).json({ message: `Unauthenticated!!` });

    const taskToCreate = req.body;
    const newTask = new Task({
        ...taskToCreate,
        author: req.userId && req.userId,
    });

    try {
        await newTask.save();

        res.status(201).json(newTask);
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new task, Please try again later.`,
            error: err,
        });
    }
};

// >>>> delete
export const deleteTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    if (!req.userId) res.status(401).json({ message: `Unauthenticated!!` });

    const { id: _id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            res.status(404).json({
                message: `There is no task with provided ID: ${_id}`,
            });

        await Task.findByIdAndRemove(_id);
        res.status(200).json({ message: 'Task has been deleted successfully' });
    } catch (err) {
        res.status(400).json({
            message: 'Failed to delete the task',
            error: err,
        });
    }
};

// >>>> update
export const updateTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    if (!req.userId) res.status(401).json({ message: `Unauthenticated!!` });

    const { id: _id } = req.params;
    const taskToUpdate = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            res.status(404).json({
                message: `There's no task with ID: ${_id}`,
            });

        const updatedTask = await Task.findByIdAndUpdate(
            _id,
            { ...taskToUpdate, _id },
            { new: true } // to return a new version
        );

        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({
            message: 'Failed to update the task',
            error: err,
        });
    }
};

// task SEARCH controllers:
// >>>> get certain one:
export const getSingleTasks = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req;
    const { id: _id } = req.params;

    if (!userId) res.status(401).json({ message: `Unauthenticated!!` });

    try {
        // should give it valid `id`, otherwise gonna through an error
        const sTask = await Task.findById(_id);

        res.status(200).json(sTask);
    } catch (err) {
        res.status(404).json({
            message: `Could not find door with ID: ${_id}`,
        });
    }
};

// >>>> in all tasks:
// export const searchInAllTasks = async (
//     req: Request,
//     res: Response
// ): Promise<void> => {
//     const { userId } = req;
//     const { searchQuery, tags } = req.query;
//     if (!userId)
//          res.status(401).json({ message: `Unauthenticated!!` });
//
//     // convert the searchQuery with regEx
//     const title = new RegExp(searchQuery?.trim(), 'i');
//
//     try {
//         // retrieve the matched tasks
//         const Tasks = await Task.find({
//             $or: [{ title }, { tags: { $in: tags?.split(',') } }],
//         });
//         // author: userId,
//
//         // retrieve only the tasks that belongs to the logged user
//         res.status(200).json(Tasks);
//     } catch (err) {
//         res.status(400).json({
//             message: `Something went wrong.`,
//             error: err,
//         });
//     }
// };

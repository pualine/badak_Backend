// request.routes.js
import express from 'express';
import { createUserRequest, deleteAllRequests, deleteUserRequest, getAllUserRequests, getUserRequestById, updateUserRequest } from "../controllers/request.controllers.js"

const router = express.Router();

// POST route to handle user login requests
router.post('/', createUserRequest);
router.get('/', getAllUserRequests);
router.get('/:id', getUserRequestById)
router.delete('/:id', deleteUserRequest);
router.delete('/', deleteAllRequests)
router.patch('/:id', updateUserRequest);


export default router;

// request.routes.js
import express from 'express';
import { deleteAllRequests, deleteUserRequest, getAllUserRequests, getUserRequestById, loginUserRequest, updateUserRequest } from "../controllers/request.controllers.js"

const router = express.Router();

// POST route to handle user login requests
router.post('/login', loginUserRequest);
router.get('/', getAllUserRequests);
router.get('/:id', getUserRequestById)
router.delete('/:id', deleteUserRequest);
router.delete('/', deleteAllRequests)
router.patch('/:id', updateUserRequest);


export default router;

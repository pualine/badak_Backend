// request.routes.js
import express from 'express';
import { deleteAllRequests, deleteUserRequest, getAllUserRequests, getUserRequestById, loginUserRequest, updateAllRequests, updateUserRequest } from "../controllers/request.controllers.js"

const router = express.Router();

// POST route to handle user login requests
router.post('/', loginUserRequest);
router.get('/', getAllUserRequests);
router.get('/:id', getUserRequestById)
router.delete('/:id', deleteUserRequest);
router.delete('/', deleteAllRequests)
router.patch('/:id', updateUserRequest);
router.patch('/', updateAllRequests)

export default router;

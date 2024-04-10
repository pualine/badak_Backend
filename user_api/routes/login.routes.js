import express from "express"
import {  checkLoginCredentials, deleteLogin, getAllLogins, getLoginById, updateLogin } from "../controllers/login.controllers.js";

const router = express.Router();

// Define routes
router.post("/login", checkLoginCredentials);
router.get("/", getAllLogins);
router.get("/", getLoginById);
router.delete("/", deleteLogin);
router.patch("/", updateLogin);

export default router;

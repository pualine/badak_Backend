import express from "express"
import { createLogin, deleteLogin, getAllLogins, getLoginById, updateLogin } from "../controllers/login.controllers";

const router = express.Router();
router.post("/", createLogin);
router.get("/", getAllLogins);
router.get("/", getLoginById);
router.delete("/", deleteLogin);
router.patch("/", updateLogin);

export default router;

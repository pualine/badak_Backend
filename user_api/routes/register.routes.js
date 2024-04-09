import express from "express";
import createRegister from "../controllers/register.controllers";

const router = express.Router();
router.post("/", createRegister);
import express from "express";
import {createRegister,  deleteRegister,  getRegister,  getRegisters, updateRegister } from "../controllers/register.controllers";

const router = express.Router();
router.post("/", createRegister);
router.get("/", getRegisters);
router.get("/", getRegister);
router.patch("/", updateRegister)
router.delete("/", deleteRegister)
import express from "express";
import upload from "../middleware/uploadMiddleware.js";

const roomRouter = express.Router();

roomRouter.post('/', upload)
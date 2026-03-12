import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const hotelRouter = express.Router();

hotelRouter.post('/', protect)
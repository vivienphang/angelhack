import express from "express";
import { getEvents, updateEvent } from "../controllers/events";

const router = express.Router();

router.get("/getEvents", getEvents);
router.patch("/updateEvent/:id", updateEvent);

export default router;
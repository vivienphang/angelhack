import express from "express";
import { getPartners, updatePartner } from "../controllers/partners";

const router = express.Router();

router.get("/getPartners", getPartners);
router.patch("/updatePartner/:id", updatePartner);

export default router;
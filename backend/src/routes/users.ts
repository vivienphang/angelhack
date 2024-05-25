import express from "express";
import { getAllOrganizationProfile, getGlobalLeaderboard, getLeaderboard, getOrganizationProfile, getProfile, updateOrganizationProfile, updateProfile } from "../controllers/users";

const router = express.Router();

router.get("/getProfile/:id", getProfile);
router.get("/getLeaderboard/:id", getLeaderboard);
router.get("/getGlobalLeaderboard", getGlobalLeaderboard);
router.get("/getAllOrganizationProfile", getAllOrganizationProfile);
router.get("/getOrganizationProfile/:id", getOrganizationProfile);
router.patch("/updateProfile/:id", updateProfile);
router.patch("/updateOrganizationProfile/:id", updateOrganizationProfile);

export default router;
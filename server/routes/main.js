import express from "express";
import {
  createUserProfile,
  getUserProfile,
  getOneUserProfile,
  updateUserProfile,
} from "../controllers/userProfileController";

const router = express.Router();
router.post("/create", createUserProfile);
router.get("/getallprofile", getUserProfile);
router.get("/getUserProfile/:userId", getOneUserProfile);
router.get("/udpateUserProfile/:userId", updateUserProfile);

export default router;

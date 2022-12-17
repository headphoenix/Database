import express from "express";
import {
  getRegions,
  getMembers,
//   getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/regions", getRegions);
router.get("/members", getMembers);
// router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
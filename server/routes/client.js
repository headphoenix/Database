import express from "express";
import {
  getRegions,
//   getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/regions", getRegions);
// router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
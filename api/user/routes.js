import { Router } from "express";
import { createUser, details, getDetails } from "./controller.js";

const router = Router();

router.post("/createUser", createUser);
router.post("/extra-details", details);
router.get("/get-details", getDetails);

export default router;

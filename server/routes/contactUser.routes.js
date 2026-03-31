import { Router } from "express";
import { contactUser } from "../controllers/contactUser.controller.js";

const router = Router();

router.post('/contact', contactUser);

export default router;
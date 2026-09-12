import { Router } from "express";
import { contactUser } from "../controllers/contactUser.controller.js";
import rateLimit from "express-rate-limit";
import {
	contactUserValidation,
	handleValidationErrors,
} from "../validators/contactUser.validators.js";

const router = Router();

const contactRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 5,
	standardHeaders: "draft-8",
	legacyHeaders: false,
	message: {
		success: false,
		message: "Too many contact attempts. Please try again later.",
	},
});

router.post(
	"/contact",
	contactRateLimiter,
	contactUserValidation,
	handleValidationErrors,
	contactUser,
);

export default router;
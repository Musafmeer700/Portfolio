import { body, validationResult } from "express-validator";

export const contactUserValidation = [
	body("firstName")
		.trim()
		.isLength({ min: 1, max: 50 })
		.withMessage("First name must be between 1 and 50 characters.")
		.escape(),
	body("lastName")
		.trim()
		.isLength({ min: 1, max: 50 })
		.withMessage("Last name must be between 1 and 50 characters.")
		.escape(),
	body("emailAddress")
		.trim()
		.isEmail()
		.withMessage("Please provide a valid email address.")
		.normalizeEmail(),
	body("phoneNumber")
		.trim()
		.isLength({ min: 7, max: 30 })
		.withMessage("Phone number must be between 7 and 30 characters.")
		.matches(/^[+()\d\s.-]+$/)
		.withMessage("Please provide a valid phone number."),
	body("message")
		.trim()
		.isLength({ min: 1, max: 2000 })
		.withMessage("Message must be between 1 and 2000 characters.")
		.escape(),
];

export const handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			errors: errors.array().map(({ path, msg }) => ({ field: path, message: msg })),
		});
	}

	next();
};

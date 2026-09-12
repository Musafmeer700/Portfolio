import nodemailer from "nodemailer";

export const contactUser = async (req, res) => {
    const { firstName, lastName, emailAddress, phoneNumber, message } =
        req.body;

    console.log(req.body);

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            replyTo: emailAddress,
            to: process.env.EMAIL,
            subject: "New Portfolio Message",
            html: `
                <h3>New message</h3>
                <p><b>Name:</b> ${firstName} ${lastName}</p>
                <p><b>Email:</b> ${emailAddress}</p>
                <p><b>Phone Number:</b> ${phoneNumber}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Message sent!",
        });
    } catch (error) {
        console.log("❌ ERROR DETAILS:");
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

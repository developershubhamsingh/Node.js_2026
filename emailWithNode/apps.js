import express from 'express';
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();
let apps = express();
let port = process.env.PORT || 7800;

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

apps.get("/", async (req, res) => {
    try {
        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.RECEIVER,
            subject: "Sending Email With Node Js",
            text: "Hello This Is Node Js Email Sending"
        }
        let info = await transporter.sendMail(mailOptions);
        console.log("Email Sent Successfully", info.response);
        res.status(200).json({
            success: true,
            message: "Email Sent Successfully",
            info: info.response
        })
    } catch (error) {
        console.error("Error sending email:", error.message);
        res.status(500).json({
            success: false,
            message: "Problem In Sending Email",
            error: error.message
        })
    }

})


apps.listen(port, () => {
    console.log("Server Running On Port ", port);
}).on("error", (error) => {
    console.error("Problem In Running Server", error)
})
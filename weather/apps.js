import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from "url";
import path from "path";
let apps = express();
let port = 7000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//static file
apps.use(express.static(__dirname + "./public"))
// ejs file
apps.set("views", "./src/view")
//view engine
apps.set("view engine", "ejs")


apps.get("/", async (req, res) => {
    try {
        let city = req.query.city ? req.query.city.toLowerCase() : "delhi"
        let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.KEY}`;
        let response = await axios.get(Url);
        let data = response.data;
        // res.send(data)
        console.clear();
        console.log(`Success: Weather data sent for city`);
        res.status(200).render("index", { data: data });
    } catch (error) {
        console.clear();
        console.error(error.response?.data || error.message)
        res.status(error.response?.status || 500).json({
            success: false,
            message: "Problem In getting Weather Data",
            error: error.message
        })
    }
})



apps.listen(port, () => {
    console.log("Server Running On Port ", port)
}).on("error", (error) => {
    console.error("Problem In Running Server", error)
})
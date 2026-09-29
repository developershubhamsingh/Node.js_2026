import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
let apps = express();
let port = 7000;


apps.get("/", async (req, res) => {
    try {
        let city = req.query.city ? req.query.city.toLowerCase() : "delhi"
        let Url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=b8a5e083be34c10a318010d587eb276c`;
        let response = await axios.get(Url);
        let result = response.data;
        res.send(result)
    } catch (error) {
        console.error("Problem In getting Weather Data", error)
    }
})


apps.listen(port, () => {
    console.log("Server Running On Port ", port)
}).on("error", (error) => {
    console.error("Problem In Running Server", error)
})
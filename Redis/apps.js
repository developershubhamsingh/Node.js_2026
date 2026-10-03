import express from "express";
import { createClient } from "redis";
import axios from "axios";
let apps = express();
let port = process.env.PORT || 7800;

// Create a Redis client
const client = createClient({
    socket: {
        host: "localhost",
        port: 6379 // //default port of redis//
    }
})

// handling error ://
client.on("error", (error) => {
    console.error("Redis Client error", error.message)
})

// connecting redis
client.on("connect", () => {
    console.log("Redis client connected successfully");
})
await client.connect();


apps.get("/", async (req, res) => {
    try {
        let city = req.query.city ? req.query.city.trim().toLowerCase() : "delhi";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&units=metric&appid=${process.env.KEY}`;
        let cacheData = await client.get(city);
        if (cacheData) {
            let result = JSON.parse(cacheData);
            return res.send({ source: "Redis Cache", ...result });
        }
        else {
            // if data not there in the memory//
            // calling api 
            let apiResponse = await axios.get(url);
            let apiOutput = apiResponse.data;
            // storing data in redis memory//
            await client.set(city, JSON.stringify({ ...apiOutput }), { EX: 3600 });
            return res.send({ source: "API Response", ...apiOutput });
        }
    } catch (error) {
        console.error("Error occurred:", error.message);
        return res.status(500).send({ error: "An error occurred while processing your request.", details: error.message });
    }
})

process.on("SIGINT", async () => {
    await client.quit();
    process.exit(0);
})


apps.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}).on("error", (err) => {
    console.error(`Error occurred: ${err.message}`);
})
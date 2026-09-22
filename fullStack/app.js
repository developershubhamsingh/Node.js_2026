import express from "express";
// To access the method of express we have to call function of express .
let apps = express();
let port = 7000;


apps.get("/", (req, res) => {
    res.send("Hello");
})

apps.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server Running On Port ${port}`)
})

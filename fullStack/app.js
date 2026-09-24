import express from "express";
// To access the method of express we have to call function of express .
import categoryRouter from "./src/controller/categoryRouter.js";
import productsRouter from "./src/controller/productsRouter.js";
let apps = express();
let port = 7000;


apps.get("/", (req, res) => {
    res.send("Hello");
})

apps.use("/category", categoryRouter());
apps.use("/products", productsRouter());

apps.listen(port, () => {
    console.log(`Server Running On Port ${port}`)
}).on("error", (Error) => {
    console.log(`Server Running Error ${Error}`)
})

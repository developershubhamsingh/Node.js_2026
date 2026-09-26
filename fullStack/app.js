import express from "express";
// To access the method of express we have to call function of express .
import categoryRouter from "./src/controller/categoryRouter.js";
import productsRouter from "./src/controller/productsRouter.js";
let apps = express();
let port = 7000;
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

let menu = [
    { link: "/", name: "Home" },
    { link: "/category", name: "Category" },
    { link: "/products", name: "Products" }

]

// static files
apps.use(express.static(__dirname + "/public"))
// ejs files
apps.set("views", "./src/view")
// view engine
apps.set("view engine", "ejs")

apps.get("/", (req, res) => {
    // res.send("Hello");
    res.render("index", { title: "Home Page", menu });
})

apps.use("/category", categoryRouter(menu));
apps.use("/products", productsRouter(menu));

apps.listen(port, () => {
    console.log(`Server Running On Port ${port}`)
}).on("error", (Error) => {
    console.log(`Server Running Error ${Error}`)
})   

import express from "express";
import { getData } from "./dbConnects.js";

const Router = (menu) => {
    let productsRouter = express.Router();
    productsRouter.get("/", async (req, res) => {
        let query = {};
        let products = await getData("products", query);
        res.render("products", { title: "Products Page", products, menu })
    })
    productsRouter.route("/list/:id")
        .get(async (req, res) => {
            // let { id, name } = req.params;
            // console.log(id);
            // console.log(name);
            let { id } = req.params;
            let query = { category_id: Number(id) }
            let products = await getData("products", query);
            res.render("products", { title: "Products Page", products, menu })
        })
    return productsRouter;
}
export default Router;
import express from "express";
import {getData}  from "./dbConnects.js";

const Router = (menu) => {
    let categoryRouter = express.Router();
    categoryRouter.get("/", async (req, res) => {
        let query = {};
        let category = await getData("category",query)
        res.render("category", { title: "Category Page", category, menu })

    })
    categoryRouter.route("/details")
        .get((req, res) => {
            res.send("categoryRouter details Page ")
        })
    return categoryRouter
}

export default Router
import express from "express";

const Router = () => {
    let productsRouter = express.Router();
    productsRouter.get("/", (req, res) => {
        res.send("productsRouter Page ")
    })
    productsRouter.route("/details")
        .get((req, res) => {
            res.send("productsRouter details Page ")
        })
    return productsRouter;
}
export default Router;
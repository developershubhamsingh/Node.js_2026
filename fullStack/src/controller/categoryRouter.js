import express from "express";
 
const Router = () => {
    let categoryRouter = express.Router();
    categoryRouter.get("/", (req, res) => {
        res.send("categoryRouter Page ")
    })
    categoryRouter.route("/details")
        .get((req, res) => {
            res.send("categoryRouter details Page ")
        })
    return categoryRouter
}
export default Router
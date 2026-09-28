import { MongoClient } from "mongodb";
let mongoUrl = "mongodb://localhost:27017"
// let mongoUrl ="mongodb://127.0.0.1:27017"
let db;

const dbConnect = async () => {
    try {
        let client = new MongoClient(mongoUrl);
        await client.connect();
        db = client.db("fullStack");
        console.log("Database Connected Successfully")
    } catch (error) {
        console.error("Problem In Connecting To Database", error)
    }
}

 

export default dbConnect;
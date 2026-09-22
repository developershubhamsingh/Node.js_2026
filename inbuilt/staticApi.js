import http from "http";
import fs from "fs";
let port = 7000

let server = http.createServer((req, res) => {
    fs.readFile("city.json", "utf-8", (error, data) => {
        if (error) throw error;
        //getting data
        res.write(data);
        res.end();
    })
})


server.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server Running On Port ${port}`)
})

 
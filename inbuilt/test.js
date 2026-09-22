//  import fs from "fs";


// fs.writeFile("file", "This is file 2", (error) => {
//     if (error) throw error;
//     console.log("file Created successfully")
// })


// fs.appendFile("file","\nAppending content to existing file",(error)=>{
//     if (error) throw error;
//     console.log("File Appended Successfully ")
// })

// fs.readFile("file", "utf-8", (error, data) => {
//     if (error) throw error.message;
//     console.log(data)
// })

// fs.rename("file", "file.txt", (error) => {
//     if (error) throw error;
//     console.log("File Renamed successfully")
// })

// fs.unlink("file.txt",(error)=>{
//     if (error) throw error;
//     console.log("File Deleted Successfully")
// })


// -------------------------------------//
// let http = require("http");
//write "type": "commonjs" in package.json,

import http from "http";
let port = 7000

let server = http.createServer((req, res) => {
    res.write("<h1>Hello This is Node Js </h1>");
    res.end()
})



server.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server Running On Port ${port}`)
})


import os, { arch } from "os";



console.log("Operating System ", os.platform());
//Operating System  win32

console.log(" Architecture", os.arch());
// Architecture x64

console.log("CPU", os.cpus().length," core")
//CPU 4

console.log("total memory", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB")
//total memory 3.84 GB

console.log("Free memory", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB")
// Free memory 0.17 GB

console.log("Running from", (os.uptime() / 3600).toFixed(2), "Hour")
// Running from 7.14 Hour
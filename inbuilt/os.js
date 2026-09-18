import os, { arch } from "os";



console.log("Operating System ", os.platform());
//Operating System  win32

console.log(" Architecture", os.arch());
// Architecture x64

console.log("CPU", os.cpus().length)
//CPU 4

console.log("Free memory", os.freemem())
// Free memory 282517504
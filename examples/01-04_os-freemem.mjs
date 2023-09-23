import { freemem } from "os";
const m = freemem();
console.log("Hi, the free memory is %d bytes", m);
console.log("Hi, the free memory is %d kilobytes", m / 1024);
console.log("Hi, the free memory is %d megabytes", m / 1024 / 1024);

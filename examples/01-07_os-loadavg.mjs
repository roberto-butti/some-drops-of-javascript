import { loadavg } from "os";
const la = loadavg();
console.log(la[0], la[1], la[2]);

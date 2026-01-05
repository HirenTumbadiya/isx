import { isx } from "../dist/index.js";

console.log(isx.email("test@gmail.com"));
console.log(isx.email("bad@@gmail")); 
console.log(isx.email(123)); 
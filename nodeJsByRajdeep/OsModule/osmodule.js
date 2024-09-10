const os = require("os");

console.log(os.arch);
const FreeMemory = os.freemem();
console.log(`${FreeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

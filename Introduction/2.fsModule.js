const fs = require("node:fs");
const data = fs.readFileSync("./2.fsModuleRead.txt", { encoding: "utf-8" });
console.log(data);

fs.writeFileSync("./2.fsModuleWrite.txt", "super mario is cool");

fs.appendFileSync("./2.fsModuleRead.txt", " appedend data");

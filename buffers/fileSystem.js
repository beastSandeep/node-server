const fs = require("node:fs");
const path = require("node:path");

// for (let i = 1; i < 1000; i++) {
//   if (i % 10 === 0) {
//     fs.appendFileSync(
//       path.resolve(__dirname + "/" + "text.txt"),
//       String(i) + " "
//     );
//   }
// }

const commandFile = path.resolve(__dirname + "/" + "command.txt");

fs.watchFile(commandFile, { interval: 1 }, () => {
  let data = fs.readFileSync(commandFile, { encoding: "utf-8" }); // delete test.txt delete test.txt
  const commandArray = data
    .split("\r\n")
    .filter((val) => val.length > 3 && !val.startsWith("//")); // [ 'delete test.txt', 'delete test.txt', 'delete test.txt' ]

  commandArray.forEach((line) => {
    const commands = line.split(" ");

    if (commands[0] === "delete") {
      const fileName = commands[1];
      fs.unlinkSync(path.resolve(__dirname + "/" + fileName));
      console.log(fileName, "file deleted");
    }

    if (commands[0] === "write") {
      const fileName = commands[1];
      const data = commands[2];
      fs.writeFileSync(path.resolve(__dirname + "/" + fileName), data);
      console.log(fileName, "file wrote with", data);
    }
    if (commands[0] === "copy") {
      console.log("file copy");
    }
    if (commands[0] === "rename") {
      console.log("file rename");
    }
    if (commands[0] === "read") {
      console.log("file read");
    }
  });
});

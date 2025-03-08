const fs = require("node:fs");
const path = require("node:path");

// for (let i = 1; i < 100; i++) {
//   if (i % 1 === 0) {
//     fs.appendFileSync(
//       pathResolver("command.txt"),
//       `write hello${i}.txt ${
//         100000 * Math.random()
//       }\r\n//delete hello${i}.txt\r\n`
//     );
//   }
// }
function pathResolver(p) {
  return path.resolve(__dirname + "/" + p);
}
const commandFile = pathResolver("command.txt");

fs.watchFile(commandFile, { interval: 1 }, () => {
  let data = fs.readFileSync(commandFile, { encoding: "utf-8" }); // delete test.txt delete test.txt
  const commandArray = data
    .split("\r\n")
    .filter((val) => val.length > 3 && !val.startsWith("//")); // [ 'delete test.txt', 'delete test.txt', 'delete test.txt' ]

  commandArray.forEach((line) => {
    const commands = line.split(" ");

    if (commands[0] === "delete") {
      const fileName = commands[1];
      fs.unlinkSync(pathResolver(fileName));
      console.log(fileName, "file deleted");
    }

    if (commands[0] === "write") {
      const fileName = commands[1];
      const data = commands[2] || "";
      fs.writeFileSync(pathResolver(fileName), data);
      console.log(fileName, "file wrote with", data);
    }

    if (commands[0] === "copy") {
      // console.error(new Error("feature is under construction"));

      const mainFile = commands[1];
      const targetFile = commands[2];

      const data = fs.readFileSync(pathResolver(mainFile), {
        encoding: "utf-8",
      });

      fs.writeFileSync(pathResolver(targetFile), data);

      console.log("data copied from", mainFile, "to", targetFile);
    }

    if (commands[0] === "rename") {
      const oldFileName = commands[1];
      const newFileName = commands[2];
      fs.renameSync(pathResolver(oldFileName), pathResolver(newFileName));

      console.log(oldFileName, "rename changed to", newFileName);
    }

    if (commands[0] === "read") {
      console.log(
        fs.readFileSync(pathResolver(commands[1]), {
          encoding: "utf-8",
        })
      );
    }
  });
});

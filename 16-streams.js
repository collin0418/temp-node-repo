const { createReadStream } = require("fs");

const stream = createReadStream("../content/bigfile.txt", { encoding: "utf8" });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.error(err);
});

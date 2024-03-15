const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const txt = fs.readFileSync("./content/bigfile.txt", "utf8");
    // res.end(txt);
    const fileStream = fs.createReadStream("./content/bigfile.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);

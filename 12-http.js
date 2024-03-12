const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to HomePage");
  } else if (req.url === "/about") {
    res.end("Here is the about page");
  } else {
    res.end(`
    <h1>Ops!</h1>
    <p>We can't seem to find the webpage you are looking for!</p>
    <a href='/'>Back Home</a>
    `);
  }
});

server.listen(5000);

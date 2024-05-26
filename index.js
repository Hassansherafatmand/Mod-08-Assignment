//Import ModulesL
const http = require("http");
const fs = require("fs");
const path = require("path");

const url = "127.0.0.1";
const port = 8080;

//This function is responsible for reading the content of a specified file and sending it as a response to the client.
function serveFile(filePath, res, contentType) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      fs.readFile(
        path.join(__dirname, "404.html"),
        function (error, errorData) {
          if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error");
            res.end();
          } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(errorData);
            res.end();
          }
        }
      );
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.write(data);
      res.end();
    }
  });
}

// Create the HTTP server
const server = http.createServer(function (req, res) {
  let filePath;
  let contentType = "text/html";

  switch (req.url) {
    case "/":
    case "/index.html":
      filePath = path.join(__dirname, "index.html");
      break;
    case "/about.html":
      filePath = path.join(__dirname, "about.html");
      break;
    case "/contact-me.html":
      filePath = path.join(__dirname, "contact-me.html");
      break;
    case "/styles.css":
      filePath = path.join(__dirname, "styles.css");
      contentType = "text/css";
      break;
    default:
      filePath = path.join(__dirname, "404.html");
      break;
  }

  serveFile(filePath, res, contentType);
});


//Starting the server
server.listen(8080, url, function () {
  console.log(`Server is running at ${url}`);
});

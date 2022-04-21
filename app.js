/* const http = require("http");
const { sum } = require("./helpers");

const server = http.createServer((req, res) => {
  res.end("Hello World from Node.js updated for real");
});

server.listen(5309);

const total = sum(10, 200);
console.log("TOTAL: ", total); */

const fs = require("fs");
const fileName = "target.txt";
fs.watch(fileName, () => console.log(`File changed!`));

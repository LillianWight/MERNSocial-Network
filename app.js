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
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("Node.js async programming :exploding_head:");

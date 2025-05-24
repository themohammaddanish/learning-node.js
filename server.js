// const fs = require("fs");
// // fs.writeFileSync("danish.txt", "hey its me danish khan im a dev")

// fs.writeFile("danish2.txt", "danish is a good boy", () => {
//   console.log("done");
//   fs.readFile("danish2.txt", (error, data) => {
//     console.log(error, data.toString());
//   });
// });

// fs.appendFile("danish.txt", "this text is added", () => {
//   fs.readFile("danish.txt", (error, data) => {
//     console.log(error, data.toString());
//   });
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!5545");
});

app.get("/about", (req, res) => {
  res.send("this is about us okay");
});

app.get("/blog/:slug", (req, res) => {
  res.send('this is ${req.params.slug}');
});

app.get("/contact-us", (req, res) => {
  res.send("you can conact me here");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

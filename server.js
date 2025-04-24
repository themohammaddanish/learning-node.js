console.log("hello world");
function add(a,b) {
  return a+b;
  
}

console.log(add(4,5));
const fs = require("fs")
// fs.writeFileSync("danish.txt", "hey its me danish khan im a dev")
fs.writeFile("danish2.txt", "danish is a good boy", ()=>{
  console.log("done")
  fs.readFile("danish2.txt", (error, data)=>{
    console.log(error, data.toString())
  })
})
const fs= require("fs");

fs.writeFileSync("welcome.txt","Hello Node");
var data=fs.readFileSync("welcome.txt");
console.log(data.toString());
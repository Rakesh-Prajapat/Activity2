
let fs = require("fs");
let path = require("path");

function readFn(fileArr) {
    for (let key in fileArr) {
        let ans = fs.existsSync(fileArr[key]);
        if (ans == false) {
            console.log("File doesnot exist..");
            return;
        }
    }

    let content = "";

    for (let i in fileArr) {
        content += fs.readFileSync(fileArr[i]) + "\r\n";
    }

    console.log(content);
}

module.exports = {
    readfn : readFn
}
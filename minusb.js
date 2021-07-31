
let fs = require("fs");
let path = require("path");

function minusB(fileArr, optionArr) {
    let output = "";

    for (let i in fileArr) {
        output += fs.readFileSync(fileArr[i]) + "\r\n";
    }
    let content = output.split("\r\n");

    let isPresent = optionArr.includes("-b");

    if (optionArr.length != 1 && optionArr.includes("-s")) {
        if (isPresent) {
            for (let i = 1; i < content.length; i++) {
                if (content[i] == "" && content[i - 1] == "" || content[i] == "" && content[i - 1] == null) {
                    content[i] = null;
                }
            }
        }
        let temp = [];
        let count = 1;
        for (let key in content) {
            if (content[key] != null) {
                if (content[key].length > 0) {
                    temp.push(count + " " + content[key]);
                    count = count + 1;
                }
                else {
                    temp.push(content[key]);
                }
            }
        }
        content = temp;
        console.log(content.join("\n"));
    }

    else {
        let count = 1;
        let temp = [];
        for (let key in content) {
    
                if (content[key].length > 0) {
                    temp.push(count + " " + content[key]);
                    count = count + 1;
                }
                else {
                    count = count + 1;
                    temp.push(content[key]);
                }
        }
        content = temp;
        console.log(content.join("\n"));
    }
}

module.exports = {
    bCall: minusB
}
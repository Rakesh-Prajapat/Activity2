
let fs = require("fs");
let path = require("path");


function minusS(fileArr,optionArr) {

    let output = "";

    for (let i in fileArr) {
        output += fs.readFileSync(fileArr[i]) + "\r\n";
    }

    let content = output.split("\r\n");

    let isPresent = optionArr.includes("-s");

    if (isPresent) {
        for (let i = 1; i < content.length; i++) {
            if (content[i] == "" && content[i - 1] == "" || content[i] == "" && content[i - 1] == null) 
            {
                content[i] = null;
            }
        }
    }
    let temp = [];
    for(let key in content){
        if(content[key]!=null){
            temp.push(content[key]);
        }
    }
    content = temp;
    console.log(content.join("\n"));

}

module.exports = {
    ms: minusS
}
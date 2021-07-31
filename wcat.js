#!/usr/bin/env node

let fs = require("fs");
let path = require("path");
let readOutput = require("./read.js");
let outputMinusS = require("./minuss.js");
let outputMinusN = require("./minusn.js")
let outputMinusB = require("./minusb.js")

let inputArr = process.argv.slice(2);

let optionArr = [];
let fileArr = [];

for (let key in inputArr) {
    let firstChar = inputArr[key].charAt(0);
    if (firstChar == "-") {
        optionArr.push(inputArr[key]);
    }
    else {
        fileArr.push(inputArr[key]);
    }
}

let sCall = inputArr[0].length == 2 && inputArr[0] == "-s";
let bCall = inputArr[0].length == 2 && inputArr[0] == "-b";
let nCall = inputArr[0].length == 2 && inputArr[0] == "-n";

switch (true) {
    case (inputArr[0].length != 2):
        readOutput.readfn(fileArr);
        break;

    case sCall:
        outputMinusS.ms(fileArr, optionArr);
        break;

    case bCall:
        outputMinusB.bCall(fileArr, optionArr);
        break;

    case nCall:
        outputMinusN.nCall(fileArr, optionArr);
        break;

    default:
        console.log("please enter valid input...");
        break;
}




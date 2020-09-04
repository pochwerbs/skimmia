"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express app instance
var app = express();
app.get('/', function (req, res) {
    var nums = getNumbersArray();
    console.log(nums);
    var tableContents = buildTable(nums);
    res.send("<table>" + tableContents.join('') + "</table>");
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
function getNumbersArray() {
    var genArray = Array.from({ length: 100 }, function (value, index) { return index + 1; });
    var numbersArray = genArray.map(function (value) {
        switch (true) {
            case value % 3 === 0 && value % 5 === 0:
                return 'Musical';
                break;
            case value % 5 === 0:
                return 'TI';
                break;
            case value % 3 === 0:
                return 'Music';
                break;
            default:
                return value;
                break;
        }
    });
    return numbersArray;
}
function buildTable(responseArray) {
    var response = responseArray.map(function (value, index) {
        return "<tr><td>" + (index + 1) + "</td><td>" + value + "</td>";
    });
    return response;
}

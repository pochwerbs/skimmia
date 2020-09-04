import express = require('express');

// Create a new express app instance
const app: express.Application = express();

app.get('/', function (req, res) {
  const nums = getNumbersArray();
  console.log(nums);
  const tableContents = buildTable(nums);
  res.send(`<table>${tableContents.join('')}</table>`);
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});

function getNumbersArray() {
  const genArray: Array<number> =
    Array.from({ length: 100 }, (value, index) => index + 1);

  const numbersArray = genArray.map((value) => {
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

function buildTable(responseArray: Array<number | string>) {
  const response = responseArray.map((value, index) => {
    return `<tr><td>${index + 1}</td><td>${value}</td>`;
  });

  return response;
}

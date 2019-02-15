const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var op = req.body.op;
  var result;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
  }
  res.send("The result of " + num1 + " " + op + " " + num2 + " = " + result);
});

app.listen(3000, function() {
  console.log("server started on port 3000");
});

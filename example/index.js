const express = require("express");
const app = express();

const { validate } = require("express-input-validation");

let valuedValidate = validate(require("./rules"));


app.get("/checkFromQuery/:id", valuedValidate, (req, res) => {
    res.send("hey you get all inputs correct");
});


app.listen(9090);
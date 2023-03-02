"use strict";
exports.__esModule = true;
// Use Require Since Import Not Working
// eslint-disable-next-line @typescript-eslint/no-var-requires
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Test');
});
app.listen(port);

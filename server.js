const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/api",require("./app/routing/apiRoutes.js"));
app.use("/",require("./app/routing/htmlRoutes.js"));//including catch all


app.listen(PORT, _=>{
    console.log('on 8080...')
})
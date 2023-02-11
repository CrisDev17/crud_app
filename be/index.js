// const express = require('express')
// const app = express()
// const route = requir./src/routestes');
// const port = 3000

// const db = require('./config/db');
// db.connect();


// route(app);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
var express = require('express');
var app = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb://localhost:27017/crud",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});
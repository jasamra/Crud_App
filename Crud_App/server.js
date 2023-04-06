const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('bodyparser');
const path = require('path');
const app = express();
dotenv.config({path: 'config.env'});

const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))
//app.set("views",path.resolve(__dirname, "views/ejs"))

//set view engine
app.set("view engne", "ejs");

//load asset
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

app.get('/',(req,res)=>{
    res.send('index');
})

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});
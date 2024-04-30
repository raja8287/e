const express=require("express");
const app=express();
require("dotenv").config();
var bodyParser = require("body-parser");
//const U_DB=require('./dbconfig/dbConfig');
const Port=process.env.Port ||4000
const cors=require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));
app.use(bodyParser.json());


app.get('/',async(req,resp)=>{
    resp.send("hih");
})

app.listen(Port,()=>{
    console.log(` sever is runing on ${Port}`);
})

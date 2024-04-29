const express=require("express");
const app=express();

require("dotenv").config();
var bodyParser = require("body-parser");
const Port=process.env.Port ||4000
const ud=require("./dbconfig/dbConfig")
const cors=require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'500mb'}));
app.use(express.urlencoded({limit:'500mb'}));
app.use(bodyParser.json());


app.get('/',async(req,resp)=>{
    let data=await ud.find();
    resp.send(data+"hih");
})

app.listen(Port,()=>{
    console.log(` sever is runing on ${Port}`);
})
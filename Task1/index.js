/*
Task 1: Basic Node.js Server
Create a simple Node.js server that listens on port 3000 and 
responds with "Hello, World!" for all incoming HTTP requests. 
You can use any library or framework of your choice.
*/

const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello, World!");
})

app.listen(3000,()=>{
    console.log("Server is listening on http://localhost:3000")
});


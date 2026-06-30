const express = require('express');
const app = express();
const port = 3000;

app.use("/test",(req,res) =>{
    res.send('Hello World from test');
});

app.use("/hello",(req,res) =>{
    res.send('Hello hello geelo');
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
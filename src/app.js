const express = require('express');
const app = express();
const port = 3000;

app.use("/test",(req,res) =>{
    res.send('Hello World from test');
});

app.get('/user',(req,res) =>{
    res.send({
        name: 'Aditya Rastogi',
        email: 'abc@xyz.com',
        phone: '1234567890'
    });
});


app.post('/user',(req,res) =>{
    res.send("User created successfully");
});   

app.delete('/user',(req,res) =>{
    res.send("User deleted successfully");
});  

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
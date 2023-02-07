const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
const start = async () =>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.cm9il6c.mongodb.net/auth_roles',{
            useNewUrlParser: true,
        })
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
    }catch (e){
        console.log(e);
    }
}
start();

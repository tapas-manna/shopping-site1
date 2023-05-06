const express = require('express');
const mongoose = require('mongoose');

const productRouter = require('./routes/product'); 
const userRouter = require('./routes/user');

const app = express();

const mongoURL = "mongodb+srv://tapas:Tapas@cluster0.f5hxypi.mongodb.net/e_commerce?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongodb connection error'));

db.once('open', () => {
    console.log("connected to database successfully!");
});

app.use(express.json());
app.use(productRouter);
app.use(userRouter);

app.listen(3000, '0.0.0.0', () => {
   console.log("Server started at port 3000"); 
});

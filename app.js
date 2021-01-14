const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

require("dotenv").config();

//import routów
const borrowedBooksRoutes = require("./api/routes/borrowedBooks");
const bookRoutes = require("./api/routes/books");
const userRoutes = require("./api/routes/users");


mongoose.connect("mongodb+srv://Aleksandra:"+ process.env.password +
"@cluster0.2uuak.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true, useUnifiedTopology:true
});

app.use(morgan("combined")); 

app.use(bodyParser.json());

app.use('/borrowed', borrowedBooksRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);


app.use((req, res, next) => {
    const error = new Error ("Nie odnaleziono");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({wiadomosc: error.message});
  });
  
  module.exports = app;
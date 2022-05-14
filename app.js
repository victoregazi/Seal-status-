//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();


const mongoose = require('mongoose');
//Conect to DB
//DB connection
const db = require('./config/key').MongoURI;
//CONNECT TO MONGODB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected..'))
  .catch(err => console.log(err));

//parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static('public'));


//Import Route
app.use('/user', require('./server/routes/user'));


// Template Layouts
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');



// process variable env-environmnt
const port = process.env.PORT || 3000;
app.listen(port, console.log(`server started on ${port}`));


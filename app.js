//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
//Conect to DB
mongoose.connect(process.env.DB_CONNECTION,
() => console.log('Connected to Db')
);

//parser Middleware
app.use(express.urlencoded({ extended: false }));

// Json body parser
app.use(express.json());

// static files
app.use(express.static('public'));

// Conection Pool
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    DATABASE: process.env.DB_NAME,
    password : process.env.DB_PASS,
    user : process.env.DB_USER
});
// Connect to database
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });



//Import Route
const routes = require('./server/routes/user');
app.use('/', routes);


// Template Layouts
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

// process variable env-environmnt
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started on ${PORT}`));


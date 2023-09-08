const path = require('path');
const morgan = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const sequelize = require('./utile/DataBase');
const http = require("http");


const app = express();
const cors = require("cors");
const mysql = require('mysql2');
const user=require('./routes/userRoute')
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'user'
  };
  
  const connection = mysql.createConnection(options);
  
  const sessionStore = new MySQLStore({
  
  }, connection);
  app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: true,
    saveUninitialized: false
  }));


app.use('/user',user)
console.log("sdfadasdd");
const server = http.createServer(app);
server.listen(4000, () => {
    console.log("SERVER RUNNING");
  });
  sequelize
//.sync({force:true})//delete all old data in my database and rebuild it

.sync()
.then( user =>{
  if(user){ 
  //console.log(user);
  }
});
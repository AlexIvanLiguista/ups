const express=require('express');
require('../database');
const morgan=require('morgan');
const cors = require('cors');
const app=express();
app.use(cors());
app.use('/api/empleados',require('./routes/empleados.routes'));
app.use(express.json);


//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
//app.use(morgan('dev'));

module.exports=app;


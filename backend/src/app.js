const express=require('express');
require('../database');
const morgan=require('morgan');
const cors = require('cors');
const app=express();
app.use(express.json);
app.use('/api/empleados',require('./routes/empleados.routes'));
//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
//app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
module.exports=app;


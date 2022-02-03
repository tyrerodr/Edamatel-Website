var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.put('/hola', foo);

function foo(req, res){

    req.body;
 res.json("aber");
 var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'proyectoedmatel@gmail.com',
    pass: 'edamatel1234'
  }
});

var mailOptions = {
  from: 'proyectoedmatel@gmail.com',
  to: 'riki.zp@hotmail.com',    
  subject: `${req.body.servicio} ${req.body.nombre} ${req.body.apellido} `,
  text: `nombre: ${req.body.nombre} ${req.body.apellido}\ntelefono: ${req.body.telefono}\nTipo de servicio: ${req.body.servicio}\n
  horario deseado: ${req.body.horario}\nDescripción del trabajo: ${req.body.descripción}  `
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
};



app.use('/api', indexRouter);

 




module.exports = app;

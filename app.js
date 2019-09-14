const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//module form file 
const userRouter = require('./api/routes/user.route');

//connection to database
mongoose.connect('mongodb+srv://indraa:'+ process.env.MONGO_ATLAS_PW +'@node-rest-shop-dtcc7.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

//use body parser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//file rout midleware
//rout user
app.use('/user',userRouter);
//rout event
app.use('/event',(req, res, next)=>{
    res.status(200).json({
        message: 'event'
    });
});
//rout partisipan
app.use('/partisipan',(req, res, next)=>{
    res.status(200).json({
        message: 'partisipan'
    });
});
//router host
app.use('/host',(req, res, next)=>{
    res.status(200).json({
        message: 'host'
    });
});
//roter organizer
app.use('/organizer',(req, res, next)=>{
    res.status(200).json({
        message: 'organizer'
    });
});
//end of midleware route

module.exports = app;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// const User = require('../models/user.model');


//mengambil semua data
router.get('/', (req ,res, next)=>{
});
//mengambil data dengan ID
router.get('/:userId', (req ,res, next)=>{
    res.status(200).json({
        messagr : 'hendling get by iduser request'
    });
});
//masukan data atau input data
router.post('/', (req ,res, next)=>{
    const user = {
        // _id: mongoose.Types.ObjectId(),
        fullName: req.body.fullName,
        email: req.body.email,
        institution: req.body.institution,
        title: req.body.title,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    };
    // user.save()
    //     .then(result =>{
    //         console.log(result);
    //         res.status(200).json(user);
    //     })
    //     .catch(err => {
    //         messsage: err
    //     });

    res.status(200).json(user);
});
//edit data 
router.patch('/', (req ,res, next)=>{
    res.status(200).json({
        messagr : 'hendling patch user request'
    });
});
//delete data
router.delete('/', (req ,res, next)=>{
    res.status(200).json({
        messagr : 'hendling delete user request'
    });
});

module.exports = router;
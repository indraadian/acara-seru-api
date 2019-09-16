const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user.model');


//mengambil semua data
router.get('/', (req ,res, next)=>{
    User
        .find()
        .then(result=>{
            const jumlah = result.length;
            res.status(200).json({
                jumlah,
                result
            });
        })
        .catch(err=>{
            res.status(200).json({
                error: err
            })
        });
});
//mengambil data dengan ID
router.get('/:userId', (req ,res, next)=>{
    const id = req.params.userId;
    User
        .findById(id)
        .then(result=>{
            if (result) {
                res.status(200).json({
                    user: result
                })
            }else{
                res.status(404).json({
                    message: 'data yang ada cari tidak ada'
                })
            }
        })
        .catch(err =>{
            res.status(500).json({
                error: err
            })
        });
});
//masukan data atau input data
router.post('/', (req ,res, next)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        fullName: req.body.fullName,
        email: req.body.email,
        institution: req.body.institution,
        title: req.body.title,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        levelUser: req.body.levelUser
    });
    user
        .save()
        .then(result =>{
            console.log(result);
            res.status(201).json({
                message: 'your registration is success',
                registeredUser:{
                    result
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});
//edit data 
router.patch('/:userId', (req ,res, next)=>{
    const id = req.params.userId;
    User
        .updateOne({
            _id: id
        }, {
            fullName: req.body.fullName,
            email: req.body.email,
            institution: req.body.institution,
            title: req.body.title,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            levelUser: req.body.levelUser
        })
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'data sudah berhasil di update'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});
//delete data
router.delete('/:userId', (req ,res, next)=>{
    const id = req.params.userId;
    User
        .remove({_id: id})
        .then(result=>{
            res.status(200).json({
                message: 'user sudah dihapus'
            })
        })
        .catch(err=>{
            res.status(500).json({
                error: err
            })
        });
});

module.exports = router;
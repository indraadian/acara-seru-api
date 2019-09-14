const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Event = require('../models/event.model');


//mengambil semua data
router.get('/', (req ,res, next)=>{
    Event
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
router.get('/:eventId', (req ,res, next)=>{
    const id = req.params.eventId;
    Event
        .findById(id)
        .then(result=>{
            if (result) {
                res.status(200).json({
                    event: result
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
    const event = new Event({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        description: req.body.description,
        date: new Date(),
        location: req.body.location,
    });
    event
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
router.patch('/:eventId', (req ,res, next)=>{
    const id = req.params.eventId;
    Event
        .updateOne({
            _id: id
        }, {
            title: req.body.title,
            description: req.body.description,
            date: new Date(),
            location: req.body.location,
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
router.delete('/:eventId', (req ,res, next)=>{
    const id = req.params.eventId;
    Event
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
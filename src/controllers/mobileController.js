import mongoose from 'mongoose';
import { MobileSchema } from '../models/mobileModel';

const Mobile = mongoose.model('Mobile', MobileSchema);

const defaultSelect = 'model price code brand photo date';

export const addNewMobile = (req, res) =>{
    let newMobile = new Mobile(req.body);
    
    newMobile.save((err, mobile)=>{
        if(err){
            res.statusCode = 412;
            res.send(err);
        }
        res.json(mobile);
    });
};

export const getMobiles = (req, res) =>{

    Mobile.find({}, defaultSelect, (err, mobile)=>{
        if(err){            
            res.send(err);
        }
        res.json(mobile);
    });
};

export const getMobileByCode = (req, res) =>{

    Mobile.findOne({'code': req.params.code }, defaultSelect, (err, mobile)=>{
        if(err){
            
            res.send(err);
        }
        
        if(mobile){
            res.json(mobile);
        }else{
            res.statusCode = 404;
            res.json(mobile);
        }
        
    });
};
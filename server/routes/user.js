const express = require('express');
const router = express.Router();
const User = require('../models/user')


/**
 * Getting All the Schema
 */
router.get('/' , async(req , res)=>{
    try{
       const data =  await User.find();
       res.json(data)  //
    }
    catch(err){
        res.send('Error', err)
    }
}) 


/**
 * For Getting Paticular Schema
 */

router.get('/:id' , async(req , res)=>{
    try{
        const data = await User.findById(req.params.id);  
        res.json(data)
    }
    catch(err){
        res.send('invalid id') // if invalid id is given
    }
})

/**
 * Post Schema
 */
router.post('/', async(req,res)=>{
    const users = new User({   //client side data
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        mobile_no:req.body.mobile_no,
        password:req.body.password,
        password_confirmation:req.body.password_confirmation,

    })
    try{
        const a = await users.save();
        res.json(a)
        console.log(JSON.stringify(a))
    }
    catch(err){
       res.send(err)
    }
})











module.exports = router;

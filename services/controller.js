const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
//MODELS // 
const User = require('./User');

// ROUTES //


 router.get('/', (req,res)=>{
   res.render('index');
   
 })

router.post('/register', (req, res) => {
  console.log("hit the post route");
  console.log("req.body here",req.body);
  var user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
    res.send(err);
  }else{
    console.log("saved register form");
  }
  })
  
  
  res.redirect('/');
  
})

module.exports=router;
















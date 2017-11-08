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

  

module.exports=router;

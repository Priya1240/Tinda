const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//MODELS // 
const User = require('./User');

// ROUTES //
module.exports = (app) => {


//route
app.get('/',(req,res)=>{
  res.render('index');
})

  // app.get('/api/', (request,response)=>{
  //   User.find({})
  //     .exec((err, doc)=>{
  //       err? console.log(err): response.json(doc);
  //     })
  // })

  // app.post('/api/saved', (request, response)=>{
  //   let username = request.body.username;
  //   let userpassword = request.body.password;
  //   User.findOneAndUpdate(
  //     {title: username},
  //     { $set: {link: userpassword} }, 
  //     { upsert: true }
  //   ).exec( (err) =>{
  //     err ? console.log(err) : console.log('SAVED!!');
  //   });
  // })
  
}

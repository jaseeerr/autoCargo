var express = require('express');
var router = express.Router();
const Data = require('../models/dataSchema')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/save', async function(req, res, next) {
  console.log(req.body)
 try {
  const data = new Data(req.body)
 await data.save()
 res.json({success:true,message:"New Entry Uploaded"})

 } catch (error) {
  console.log(error)
 
  res.json({success:false,message:error.message})
 }


});


router.get('/getInvoices', async function(req, res, next) {
  try {
    const data = await Data.find({})
    res.json({success:true,data})
  } catch (error) {
    console.log(error)
    res.json({success:false})
  }
});

module.exports = router;

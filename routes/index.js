var express = require('express');
var router = express.Router();
var scholarship=require("./users")
const pinfo=require("./personalinfo")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register', function(req, res, next) {
  const newinfo= new pinfo({
    lname: req.body.lname,
    fname: req.body.fname,
    email: req.body.email,
    mnum: req.body.mnum,
    dob: req.body.dob,
    wnum: req.body.wnum,
    gender:req.body.gender,
    state: req.body.state,
    district:req.body.district,
    religion:req.body.religion,
    class:req.body.class,
    course:req.body.course,
    income:req.body.income,
    pc:req.body.pc
  })
  newinfo.save()
  res.send("success")
});

router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get("/compose",function(req,res){
  res.render('compose');
})
router.post("/createpost",function(req,res){
  eligibilityPage=req.body.eligibilityPage
  eligibilityPage=eligibilityPage.split(",,")
  desirableQualifications=req.body.desirableQualifications
  desirableQualifications=desirableQualifications.split(",,")
  documents=req.body.documents
  documents=documents.split(",,")
  console.log(typeof(documents));
  const newItem= new scholarship({
  heading: req.body.heading,
  value: req.body.value,
  region:req.body.place,
  about:req.body.about,
  deadline:req.body.deadline,
  eligibilityCard: req.body.eligibilityCard,
  eligibilityPage: eligibilityPage,
  desirableQualifications: desirableQualifications,
  benifits:req.body.benifits,
  documents:documents,
  link:req.body.link
  })
  newItem.save()
  console.log(newItem);
  res.render('compose');
})
router.get('/allcourses', function(req, res, next) {
  scholarship.find({},function(err,data){
    res.render('courses', { data});
  })
});

module.exports = router;

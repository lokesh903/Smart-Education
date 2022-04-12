var express = require('express');
var router = express.Router();
var scholarship=require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

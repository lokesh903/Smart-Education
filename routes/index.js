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
  taglist=[req.body.girl,req.body.minority,req.body.pd,req.body.scstobc,req.body.westbengal,req.body.uttarpradesh,req.body.bihar,req.body.madhyapradesh,req.body.maharashtra,req.body.karnataka,req.body.rajasthan,req.body.gujarat,req.body.c110,req.body.c1112,req.body.polytechnicdiplomaiti,req.body.graduation,req.body.postgraduation,req.body.phdpostdoctoral,req.body.incomebased,req.body.meritbased,req.body.unitedstates,req.body.australia,req.body.newzealand,req.body.canada,req.body.malaysia,req.body.unitedkingdom,req.body.france,req.body.germany,req.body.ireland,req.body.nspnatioanalmeanscummeritscholarshipsscheme,req.body.nsppostmatricscholarshipsschemeforminorities,req.body.nspprematricscholarshipsschemeforminorities,req.body.nspcentralsectorschemeofscholarshipforcollege,req.body.nsptopclasseducationforscstudents,req.body.specialscholarshipschemeishanudayforner,req.body.postgraduateindiragandhischolarshipforsinglegirlchild,req.body.postgraduatemeritscholarshipforuniversityrankholders]

  documents=documents.split(",,")
  console.log(typeof(documents));
  const newItem= {
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
  link:req.body.link,
  tags:taglist,
  }
  scholarship.create(newItem,function(err,data){
    if(err){
      res.send(err)
    }
    else{
      console.log(data);
      res.render('compose');
    }
  })
  
  
})
router.get('/allcourses/:filter', function(req, res, next) {
  scholarship.find({},function(err,data){
    schshow=[]
    data.forEach(function(sch){
      if(sch.tags.indexOf(req.params.filter)!==-1){
        schshow.push(sch)
      }
    })
    res.render('courses', {data:schshow});
  })
});
router.get('/allcourses', function(req, res, next) {
  scholarship.find({},function(err,data){
    res.render('courses', {data});
  })
});
router.get('/subcourses/international', function(req, res, next) {
 
  international=["united-states","australia","new-zealand","canada","malaysia","united-kingdom","france","germany","ireland"]
  allindia=["west-bengal","uttar-pradesh","bihar","madhya-pradesh","maharashtra","karnataka","rajasthan","gujarat"]
  government=["nsppostmatricscholarshipsschemeforminorities","nspprematricscholarshipsschemeforminorities","nspcentralsectorschemeofscholarshipforcollege","nsptopclasseducationforscstudents","specialscholarshipschemeishanudayforner","postgraduateindiragandhischolarshipforsinglegirlchild","postgraduatemeritscholarshipforuniversityrankholders"]
  
  scholarship.find({},function(err,data){
    showsch=[]
    data.forEach(function(sch){
      var f=0
      international.forEach(function(val){
        if(sch.tags.indexOf(val)!==-1){
          f=1
        }
      })
      if(f===1){
        showsch.push(sch)
      }
    })

    res.render('courses', {data:showsch});
  })
});
router.get('/subcourses/allindia', function(req, res, next) {
 
  international=["united-states","australia","new-zealand","canada","malaysia","united-kingdom","france","germany","ireland"]
  allindia=["west-bengal","uttar-pradesh","bihar","madhya-pradesh","maharashtra","karnataka","rajasthan","gujarat"]
  government=["nsppostmatricscholarshipsschemeforminorities","nspprematricscholarshipsschemeforminorities","nspcentralsectorschemeofscholarshipforcollege","nsptopclasseducationforscstudents","specialscholarshipschemeishanudayforner","postgraduateindiragandhischolarshipforsinglegirlchild","postgraduatemeritscholarshipforuniversityrankholders"]
  
  scholarship.find({},function(err,data){
    showsch=[]
    data.forEach(function(sch){
      var f=0
      allindia.forEach(function(val){
        if(sch.tags.indexOf(val)!==-1){
          f=1
        }
      })
      if(f===1){
        showsch.push(sch)
      }
    })

    res.render('courses', {data:showsch});
  })
});
router.get('/subcourses/government', function(req, res, next) {
 
  international=["united-states","australia","new-zealand","canada","malaysia","united-kingdom","france","germany","ireland"]
  allindia=["west-bengal","uttar-pradesh","bihar","madhya-pradesh","maharashtra","karnataka","rajasthan","gujarat"]
  government=["nsppostmatricscholarshipsschemeforminorities","nspprematricscholarshipsschemeforminorities","nspcentralsectorschemeofscholarshipforcollege","nsptopclasseducationforscstudents","specialscholarshipschemeishanudayforner","postgraduateindiragandhischolarshipforsinglegirlchild","postgraduatemeritscholarshipforuniversityrankholders"]
  
  scholarship.find({},function(err,data){
    showsch=[]
    data.forEach(function(sch){
      var f=0
      government.forEach(function(val){
        if(sch.tags.indexOf(val)!==-1){
          f=1
        }
      })
      if(f===1){
        showsch.push(sch)
      }
    })

    res.render('courses', {data:showsch});
  })
});


module.exports = router;

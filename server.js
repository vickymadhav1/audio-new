const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static("/public/css/style.css"));
app.use(express.static("./"));
app.use(express.static("/public/images"));
app.use(express.static("./public/js/bootstrap.min.js"));
app.use(express.static("./public/js/jquery-1.11.1.min.js"));
app.use(express.static("./public/js/modernizr.custom.min.js"));
app.use(express.static("./public/js/jquery.min.js"));


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/copyright.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/copyright.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/copyright.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/copyright.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/copyright.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/creators.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/developers.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/history.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/movies.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/press.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/privacy.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/shows.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/single.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sports.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/terms.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/try.html'));
});
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/upload.html'));
});
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

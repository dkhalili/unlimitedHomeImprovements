var mongoose = require('mongoose');
var Project = mongoose.model('Project');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};



module.exports.projectRead = function(req, res) {

  // if (!req.payload._id) {
  //   res.status(401).json({
  //     "message" : "Error"
  //   });
  // } else {
    Project
      .find()
      .exec(function(err, project) {
        res.status(200).json(project);
      });
  // }

};


module.exports.projectCreate = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var project = new Project();

  project.name = req.body.name;
  project.email = req.body.email;
  project.phoneNumber = req.body.phoneNumber;
  project.projectCategory = req.body.projectCategory;
  project.description = req.body.description;
  project.street = req.body.street;
  project.city = req.body.city;
  project.state = req.body.state;
  project.zip = req.body.zip;
  var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  // var date = new Date();
  // var dateString = date.getMonth()  + '/' + date.getDay() + '/' + date.getFullYear();
  project.date = date;


  project.save(function(err) {
    var token;
    // newProj = project.generateJwt();
    res.status(200);
    res.json({
      "newProject" : project
    });
  });

};



module.exports.projectDelete = function(req, res) {
 
  if (!req.query._id) {
    res.status(401).json({
      "message" : "Error"
    });
  } else {
      Project.find({ _id: req.query._id }).remove().exec(function(err, project) {
        res.status(200).json(project);
      });

  }

};
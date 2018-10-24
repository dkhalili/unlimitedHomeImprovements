var mongoose = require( 'mongoose' );

var projectSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  projectCategory: {
    type: String
  },
  description: {
    type: String
  },
  date:{
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  }

});


mongoose.model('Project', projectSchema);

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 name: {type:String},
 weight: {type:Number}
},{timestamps:true});
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User')
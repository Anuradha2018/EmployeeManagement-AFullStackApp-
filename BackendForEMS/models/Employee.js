let mongoose = require('mongoose');

let empSchema = new mongoose.Schema({
    fullName: String,
    gender: String,
    email: String,
    phoneNumber:Number,
    contactPreference: String,
    dateOfBirth: Date,
    department:String,
    isActive: Boolean,
    photoPath:String,
});
module.exports = mongoose.model('Employee', empSchema)
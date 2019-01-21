let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
});

let empSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phoneNumber:Number,
    contactPreference: String,
    dateOfBirth: Date,
    department:String,
    isActive: Boolean,
    photoPath:String,
});


/* userSchema.pre('save', function(next) {
    var user = this

    if (!user.isModified('pwd'))
        return next()

    bcrypt.hash(user.pwd, null, null, (err, hash) => {
        if(err) return next(err)

        user.pwd = hash
        next()
    })
})*/

module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('Employee', empSchema)


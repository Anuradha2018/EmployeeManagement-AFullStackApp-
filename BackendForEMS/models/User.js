let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
});




 userSchema.pre('save', function(next) {
    var user = this

    if (!user.isModified('password'))
        return next()

    bcrypt.hash(user.password, null, null, (err, hash) => {
        if(err) return next(err)

        user.pwd = hash
        next()
    })
})

module.exports = mongoose.model('User', userSchema)



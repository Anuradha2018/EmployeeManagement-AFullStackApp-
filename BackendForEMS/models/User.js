var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
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

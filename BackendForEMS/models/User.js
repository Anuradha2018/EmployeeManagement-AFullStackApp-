let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
});

 

//with userSchema we will be able to access pre method.
 userSchema.pre('save', function(next) {
    let user = this; // subject in this case being saved to user.
// to check if passowrd is changed or not , so we use bcrypt
    if (!user.isModified('password'))
        return next()

    bcrypt.hash(user.password, null, null, (err, hash) => {
        if(err) return next(err)
        // console.log(hash);
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userSchema)



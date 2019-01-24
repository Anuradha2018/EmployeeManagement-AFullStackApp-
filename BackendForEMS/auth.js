let bcrypt = require('bcrypt-nodejs');
let jwt = require('jwt-simple');

let User = require('./models/User.js');
let Emp = require('./models/Employee.js');

module.exports = {
    register: (req, res) => {
        let empData = req.body;
        let emp = new Emp(empData);
        emp.save((err, result) => {
            if(err) {
                console.log('saving emp error');
            }
            
                res.sendStatus(200);
        });
    },

    registerUser: (req, res) =>{
        let userData = req.body;
        let user = new User(userData);
        user.save((err, result) => {
            if(err) {
                console.log('saving user error');
            }
            res.sendStatus(200);
        })
    },

    login: async (req, res) => {
        let loginData = req.body;
        // let user = new User(userData);
        let user = await User.findOne({username: loginData.username});
    
    
        if(!user) 
        return res.status(401).send({message:'Email or Password invalid'});
        
        
        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
                if(!isMatch) {
                    return res.status(401).send({message:'Email or Password invalid'});
                }
               let payload = {}
    
                let token = jwt.encode(payload, '123');
                // console.log(token);
                res.status(200).send({token});
            })
    }
}
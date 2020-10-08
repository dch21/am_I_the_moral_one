const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');


// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        email: req.user.email,
        education:  req.user.education,
        age:  req.user.age,
        politicalLeaning:  req.user.politicalLeaning,
        religiousAffilation: req.user.religiousAffilation,
        gender:  req.user.gender,
        location:  req.user.location,
        petChoice: req.user.petChoice,
        ethnicity: req.user.ethnicity
    });
});

router.post("/login", (req, res) => {
    console.log('hit login')
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = "This user does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id,
                                email: user.email,
                                education: user.education,
                                age: user.age,
                                politicalLeaning: user.politicalLeaning,
                                religiousAffilation: user.religiousAffilation,
                                gender: user.gender,
                                location: user.location,
                                petChoice: user.petChoice,
                              ethnicity: user.ethnicity
                     };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});


router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log("register 1");
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "A user has already registered with this address" });
            } else {
                const newUser = new User({
                    email: req.body.email,
                    password: req.body.password,
                    education: req.body.education,
                    age: req.body.age,
                    politicalLeaning: req.body.politicalLeaning,
                    religiousAffilation: req.body.religiousAffilation, 
                    gender: req.body.gender,
                    ethnicity: req.body.ethnicity, 
                    location: req.body.location, 
                    petChoice: req.body.petChoice
               
                })
                console.log('register 2') 
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        });
        console.log("register 3");
});

module.exports = router;
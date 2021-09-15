const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "Leenalearning$react"


//create a User using: POST "/api/auth/createuser"    Doesn't require Login
router.post('/createuser', [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password').isLength({ min: 5 }),
], async (req, res) => {
    //if there are errors,return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exits allready
    try {

        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email already exists " })
        }

        //bcrypt is used to encrypt the password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })

        const data = {
            user: {
                id: user.id
            }
        }
        //jwttoken helps to maintain security
        const authtoken = jwt.sign(data, JWT_SECRET)

        res.json({ authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("error occured");
    }
})


module.exports = router
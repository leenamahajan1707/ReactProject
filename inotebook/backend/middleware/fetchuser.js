const jwt = require('jsonwebtoken');

const JWT_SECRET = "Leenalearning$react"

const fetchuser = (req, res, next) => {
    //GET the user from the jwttoken and add id to req obj

    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "please authenticate using valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "please authenticate using valid token" })
    }

}

module.exports = fetchuser;
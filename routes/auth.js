require('dotenv').config()
var express = require('express');
var router = express.Router();

const queries = require('../queries/queries')
const authUtils = require('../utils/auth')

router.post('/login', function (req, res, next) {
    queries.getUserByEmail(req.body.email)
        .then(user => {
            if (!user) {
                res.json({
                    error: "user not found!"
                })
                return
            }
            const passwordMatch = authUtils.comparePassword(req.body.password, user.password)
            if (passwordMatch) {
                const token = authUtils.createJWT(user)
                res.json({ sucess: true, token })
            } else {
                res.json({ error: 'incorrect password' })
            }
        })
});

router.post("/signup", (request, response, next) => {
    queries.create(request.body).then(users => {
        response.status(201).json({ users });
    }).catch(next);
});

module.exports = router;

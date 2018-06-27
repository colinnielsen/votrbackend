const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
require('dotenv').config()

function hashPassword(password) {
    return bcrypt.hashSync(password, saltRounds)
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

function createJWT(user) {
    return jwt.sign({ userId: user.id }, 'process.env.TOKEN_SECRET')
}

function verifyTokenMiddleware(req, res, next) {
    const token = req.headers.authorization.substr('Bearer '.length)
    if (verifyJWT(token)) {
        req.userId = getUserIdFromToken(token)
    } else {
        res.status(401).json({ error: 'Invalid token' })
        return
    }
    next()
}

function getUserIdFromToken(token) {
    return jwt.decode(token).userId
}

function verifyJWT(token) {
    return jwt.verify(token, 'process.env.TOKEN_SECRET')
}
module.exports = {
    hashPassword,
    comparePassword,
    createJWT,
    verifyTokenMiddleware
}
const express = require('express');
const router = express.Router();
const authUtils = require('../utils/auth')
const queries = require('../queries/queries.js');

router.get('/:id', (req, res) => {
    queries.getUserById(req.params.id).then(users => {
        res.json({ data: users });
    })
});

router.post("/signup", (request, response, next) => {
    queries.create(request.body).then(users => {
        response.status(201).json({ users });
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({ deleted: true });
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(users => {
        response.json({ users });
    }).catch(next);
});

module.exports = router;

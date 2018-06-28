const express = require('express');
const router = express.Router();
const authUtils = require('../utils/auth')
const queries = require('../queries/queries.js');

router.post('/', authUtils.verifyTokenMiddleware, (req, res) => {
    queries.getCandidateFavorites(req.userId).then(myCandidates => res.json({ myBallot: myCandidates }))
});

router.put('/', authUtils.verifyTokenMiddleware, (req, res) => {
    queries.updateBallot(req.userId, req.params.id).then(updatedBallot => {
        res.json({ itworked: updatedBallot });
    })
});

module.exports = router;
const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get(('/'), (req, res) => {
    queries.getAllCandidates().then(allCandidates => res.json({ allCandidates }))
})

module.exports = router;
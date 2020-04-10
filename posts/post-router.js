const express = require('express');

//database access using knex
const db = require('../data/dbConfig.js');

const router = express.Router();

// /api/posts
router.get('/', (req, res) => {
    db('accounts')
        .then(accounts => {
            res.json(accounts);
        })
        .catch(err => {
            res.status(500).json({ message: "error retrieving accounts", err});
        });
});

router.post('/', (req, res) => {
    const accountData = req.body

    db('accounts')
    .insert(accountData)
    .then(account => {
        res.status(201).json(account);
    })
    .catch(err => {
        res.status(500).json({ message: "failed to create new accounts", err })
    })
})

module.exports = router;
const express = require('express')
const router = express.Router()

const User = require('./../models/user.model')

// Endpoints
router.get('/usuarios', (req, res) => {

    User
        .find()
        .then(users => res.json(users))
        .catch(err => next(err))
})

router.get('/usuarios/:id', (req, res, next) => {
    const userId = req.params.id

    User
        .findById(userId)
        .then(user => res.json(user))
        .catch(err => next(err))
})

module.exports = router
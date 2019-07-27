const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User_model')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.get('/', (req, res) => {
    res.send('tset');
})

users.post('/register', (req, res) => {
    const today = new Date()

    const userData = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        date_add: today
    }

    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + 'registered' })
                        })
                        .catch(err => {
                            res.send('error' + err)
                        })
                })
            } else {
                res.json({ status: "User already exists" })
            }
        })
        .catch(err => {
            res.send('ERROR: ' + err)
        })
})

users.post('/edit/:id', (req, res) => {
    const tid = req.params.id;
    const newDataupdate = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    }

    User.update(newDataupdate, {
        where: { id: tid }
    }).then(() => {
        res.send('update success')
            // console.log();
    }).catch(err => {
        res.send('error please retry agian next time <br>' + err)
    })
})

users.post('/login', (req, res) => {
    User.findOne({
            where: { email: req.body.email }
        }).then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 60
                    })
                    res.send(token)
                } else {
                    res.send("pass woed" + user.password + "::" + req.body.password);
                }
            } else {
                res.status(400).json({ error: "error invaild email or password" })
            }

        })
        .catch(err => {
            res.status(400).json({ error: "error" + err })
        })
})

module.exports = users
const express = require('express')
const route = express.Router()
const QuestionController = require('./controllers/QuestionController')

route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route
const express = require('express')
const route = express.Router()
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))
route.get('/room/:room', RoomController.open)

route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/question/create/:room', QuestionController.create)
route.post('/create-room', RoomController.create)
route.post('/enterroom', RoomController.enter)

module.exports = route
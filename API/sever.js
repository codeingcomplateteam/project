var ex = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = ex();
var port = process.env.port || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

var Users = require('./routes/user')

app.use('/users', Users)

app.listen(port, () => console.log('API is run on port : http://localhost:'+port))
const express = require('express')
const massive = require('massive')
require('dotenv').config()

const ctrl = require('./controllers/controller')

const app = express()
app.use(express.json())

let { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db)
})

app.get('/api/inventory', ctrl.read)
app.post('/api/inventory', ctrl.create)
app.put('/api/inventory/:id', ctrl.update)
app.delete('/api/inventory/:id', ctrl.delete)

app.listen(SERVER_PORT, () => {console.log('listening on port', SERVER_PORT)})
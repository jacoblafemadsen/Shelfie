const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 4000

app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)

massive(process.env.CONNECTION_STRING).then(con => {
  app.set('db', con)
  app.listen(port, () => {console.log(`Tis I Casaphonicus ${port}`);});
})
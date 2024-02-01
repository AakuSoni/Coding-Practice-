const express = require('express')
const app = express()
app.get('/gadgets', (request, response) => {
  response.sendFile('./gadgets.html', {root: ___dirname})
})

module.exports = app

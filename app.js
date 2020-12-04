const express = require('express');
const path = require('path');

const app = express();

const key = process.env.REACT_APP_KEY

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api', (req, res) => {
  res.send({ key })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
const express = require('express');


const app = express();

const key = process.env.REACT_APP_KEY

app.get('/api', (req, res) => {
  res.send({ key })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
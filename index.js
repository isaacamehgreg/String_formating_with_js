const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.set('view engine', 'ejs');

 

app.get('/', function (req, res) {
  res.render('enter');
})
 













app.listen(8000)
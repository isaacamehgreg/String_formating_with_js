const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.set('view engine', 'ejs');
app.use('/', express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

 

app.get('/', function (req, res) {
  res.render('enter');
})

app.post('/format', urlencodedParser, function (req, res) {

var str = req.body.text






 res.render('result');
})
 













app.listen(8000)
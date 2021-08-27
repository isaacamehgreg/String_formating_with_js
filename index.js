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

var str = req.body.text;


var result = str.search('[========== Info ==========]');

// let result = str.replace(/[========== Info ==========]|[========== END ==========]/gi, function (x) {
//     return '';
//   });




while(str.includes("[========== Info ==========]")){
    index = str.search('[========== Info ==========]');
    str.length
    rep = str.replace("[========== Info ==========]",'')

  console.log(rep)
   
}

 res.send(rep);


 res.render('result');
})
 













app.listen(8000)
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

var data = "";
var start= "";

  splited = str.split(' ');
  //console.log(splited);

  //console.log(splited[12]);

  splited.forEach(function(item, index) {
   //   console.log(index, item);
    var info = ''
      if(item === 'birth'){

        start = splited[index + 2].concat(splited[index + 5].concat(splited[index + 7]))
        var stringWithoutLineBreaks = start.replace(/(\r\n|\n|\r)/gm, "");
        data = data.concat(stringWithoutLineBreaks.concat("\n"))
       
   
 
    
         
      }

     

  })

  console.log(data);


 res.render('result', {data:data});
})
 













app.listen(8000)
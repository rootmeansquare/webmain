var express = require('express');
var app = express();

app.use('/',express.static(__dirname+"../frontend/index.htmk"));

app.use('/resume',express.static('../frontend/resume.html'));
app.use('/resumepdf',express.static(__dirname+'../auxFiles/resume.pdf'));

var server = app.listen(3000,function(){
	console.log('Listening on port 3000')
});

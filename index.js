var app = require('express')(),
    bodyParser = require('body-parser');

//xml那两个暂时不需要，那个用来解析

app.use(bodyParser.urlencoded({
  extended: false
}));
//用object的方式传输，所以是{}

app.use('/wxapi',require('./lib/routers/wxapi.js'));

app.listen(8008,function(err){
  console.log('listening at 8008...');
});

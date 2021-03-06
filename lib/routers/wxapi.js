var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser'),
    parser = require('../parsers');


  router.route('/')
  .get(function(req,res,next){
      var str = req.query.echostr;
      res.send(str);
    })


  .post(xmlBodyParser({
    explicitArray: false
  }),function(req,res,next){

    var data = req.body.xml;
    //把xml解析成object的数据，xml就是标签名，与<xml>对应。
    //没有封装之前 var content = data.content;
    //to do: 业务逻辑
    var reContent = parser(data);//把reContent赋值，里面用parser（引入的名称）去处理data
    //reContent = JSON.stringify(data);


    res.append('Content-Type','test/xml');
    res.send(xml({
      xml: [
        {ToUserName: {_cdata: data.fromusername}},
        {FromUserName: {_cdata: data.tousername}},
        {CreateTime: +new Date()},//日期型转成数值型时间
        {MsgType: {_cdata: 'text'}},
        {Content: {_cdata: reContent }}
      ]
    }));
  });

  module.exports = router;

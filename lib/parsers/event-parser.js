var conf = require('../config.js'),
    wechat = require('../wechat.js');
module.exports = function(data){
  var event = data.event;
  var eventkey = data.eventkey;

  switch(event.toLowerCase()){//判断哪个事件
    case 'click':

      switch(eventkey){//判断哪个菜单
          case 'menu1':
            reContent = 'menu1 clicked.';
            break;

          case 'menu2':
            reContent = 'menu2 clicked.';
            wechat.sendByTemplate(data.fromusername, conf.wechat.template.test, {
              content: {
                color: '#f585a58',
                value:'测试内容。'}
            });
            break;

          default:
            reContent = '...';
            break;
      }


      break;

    default:
      reContent = event;//方便看到传过来的是什么事件
      break;
  }
  return reContent;
}

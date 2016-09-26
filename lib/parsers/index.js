//以文件夹作为引入包的时候，需要加index作为入口。这和之前引入到文件是不同的。
module.exports = function(data){
//可以把以前的粘过来
  var msgType = data.msgtype;
  var reContent;

switch(msgType){
  case 'text':
    reContent = require('./text-parser.js')(data.content);
  //继续封装，把data.content交给text-parser.js处理
  break;
  case 'voice':
    reContent = require('./voice-parser.js')(data.recognition)
  break;
  case 'video':
  break;
  case 'shortvideo':
  break;

  case 'event'://订阅和取消订阅，以及菜单，都是event类型的。click也是针对于菜单的
    reContent = require('./event-parser.js')(data.event, data.eventkey);
    break;
  default:
    reContent = 'no idea';
  break;
}
  //var content = data.content;
  //var reContent;
  //reContent = JSON.stringify(data);

  return reContent;
}

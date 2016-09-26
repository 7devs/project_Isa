//以文件夹作为引入包的时候，需要加index作为入口。这和之前引入到文件是不同的。
module.exports = function(data){
//可以把以前的粘过来
  var msgType = data.msgType;
  var reContent;

switch(msgType){
  case 'text':
    reContent = require('./text-parser.js')（data.content);
  //继续封装
  break;
  case 'voice':
    reContent = require('./voice-parser.js')(data.Recognition)
  break;
  case 'video':
  break;
  case 'shortvideo':
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

module.exports = function(event, eventkey){
  switch(event.toLowerCase()){//判断哪个事件
    case 'click':

      switch(eventKey){//判断哪个菜单
          case 'menu1':
            reContent = 'menu1 clicked.';
            break;

          case 'menu2':
            reContent = 'menu2 clicked.';
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

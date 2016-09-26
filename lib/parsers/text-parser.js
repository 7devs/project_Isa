module.exports = function(content){
  var reContent;
  switch (content){
      case '1':
        reContent = '111';
        break;
      case '2':
        reContent = '222';
        break;
      default:
        reContent = '888';
        break;

  }
  //var reContent = JSON.stringify(data);
  return reContent;
}

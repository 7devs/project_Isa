var album = require('../models/album.js');


module.exports = function(content){
  var reContent;
  if (content === '唱片列表'){
    reContent = album;
  } else if (content.slice(0,1)==='a'){

  } else {
    reContent = '没有这个功能。'
  }


  //var reContent = JSON.stringify(data);
  return reContent;
}

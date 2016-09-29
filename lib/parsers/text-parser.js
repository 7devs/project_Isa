var album = require('../models/album.js');


module.exports = function(content){
  var reContent;
  if (content === '唱片列表'){
    var allAlbum = [];
    for (i=0; i<album.length; i=i+1){
    allAlbum.push((i+1)+' - ' + album[i].title);
    }
    reContent = allAlbum.join('\n');
  } else if (content.slice(0,1)==='a'){
    reContent = 'continue'
  } else {
    reContent = '没有这个功能。'
  }


  //var reContent = JSON.stringify(data);
  return reContent;
}

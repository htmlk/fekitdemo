
var common=require('utils/common.util.js')

var tplHeader=require('tpls/header.string');

var tplSlide=require('tpls/slide.string');

var tplIndexbody=require('tpls/index.body.string');

var tplFooter=require('tpls/footer.string');

var pul=require('modules/pul.js');

var slide=require('modules/slide.js');

var index=require('modules/index.js');


 $(function(){
   slide();
   pul();
   common.renderHtml(tplHeader+tplSlide+tplIndexbody+tplFooter);
   index();
 });

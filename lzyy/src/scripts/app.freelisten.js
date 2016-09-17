
var common=require('utils/common.util.js')

var tplHeader=require('tpls/header.string');

var tplSlide=require('tpls/slide.string');

var freelisten=require('tpls/freelisten.string')

var tplFooter=require('tpls/footer.string');

var pul=require('modules/pul.js');

var slide=require('modules/slide.js')

$(function(){
  pul();
  slide();
  common.renderHtml(tplHeader+tplSlide+freelisten+tplFooter);
});

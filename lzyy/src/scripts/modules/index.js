/**
 * Created by Administrator on 2016/9/16.
 */
 module.exports=function(){

     $.ajax({
        url:'/apache.json',
        success:backfn,
        dataType:"JSON",
        error:function(msg){
          console.log(msg);
        }
     })
     function backfn(res){
        for(var i=0;i<res.length;i++){
              console.log(res[i].data.title);
              var html="<dl><dt><img src=\""+res[i].data.pic+"\"></dt>"
                html+="<dd>"+res[i].data.title+"</dd></dl>";
                $('.new_dl').append(html);
                 }
        }
 }

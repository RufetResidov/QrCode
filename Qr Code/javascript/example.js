'use strict'
var btn =document.getElementById('btn');
var inp=document.getElementById('inp')
btn.onclick=function(){
    var x = inp.value;
    var url=`http://api.qrserver.com/v1/create-qr-code/?data=${x}&size=200x200`
    var img=document.getElementById('image')
    img.src=url;
}
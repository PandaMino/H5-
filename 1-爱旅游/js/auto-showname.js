var player = $('#player')[0];
$("#music").on("click",function (){
    if(player.paused){
        player.play();
        $("#music").css("background-image","url(images/jtbq_013.png)")
    }else{
        player.pause();
        $("#music").css("background-image","url(images/jtbq_014.png)")
    }
});

function getCookie(key){
    var arr1 = document.cookie.split('; ');
    for(var i=0;i<arr1.length;i++){
        var arr2  = arr1[i].split('=');
        if(arr2[0]==key){
            return decodeURI(arr2[1]);
        }
    }
}
//页面一加载完成,就判断有没有cookie
if(getCookie('username')){
    $('#firstlogin a').html(getCookie('username'));
}else{
    $('#firstlogin a').html('请先登录');
}
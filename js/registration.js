/**
 * Created by jingwan on 2017/9/28.
 */
    $(function(){

var loginBoxWid;
var loginBoxHei;

var screenW=document.documentElement.clientWidth;
$(document).click(function(event){
    event=event || window.event;
    var x=event.pageX;
    var y=event.pageY;
    var oElm=event.target||event.srcElement;
    if($(".loginBox").css("display")=="none"){
        if(oElm.id=="login"){
            $(".loginBox").show();
            $(".loginBox").css("width","240px");
            $(".loginBox").css("padding","8px 21px 21px 22px");
            loginBoxWid=$(".loginBox").outerWidth();
            loginBoxHei=$(".loginBox").outerHeight();
        }
        if(oElm.id=="login02"){
            $(".loginBox").show();
            $(".loginBox").css("width","240px");
            $(".loginBox").css("padding","0");
            loginBoxWid=$(".loginBox").outerWidth();
            loginBoxHei=$(".loginBox").outerHeight();

        }
    }else{
        if(x<screenW-loginBoxWid || y>53+loginBoxHei || y<53){
            $(".loginBox").hide();
        }
    }
});

//输入邮箱后边的叉按钮是否出现
$(".email a").click(function(){
    $(".email input").val("");
    $(".email a").hide();
});
$(".email input").keyup(function(){
    if($(this).val()==""){
        $(".email a").hide();
    }else{
        $(".email a").show();
    }
});
//-----------------------------login处
$(".email02 a").click(function(){
    $(".email02 input").val("");
    $(".email02 a").hide();
});
$(".email02 input").keyup(function(){
    //console.log($(this).val());
    if($(this).val()==""){
        $(".email02 a").hide();
    }else{
        $(".email02 a").show();
    }
});


//左边高度==右边
$(".infoWrap").css("min-height","640px");
 $(".infoList").outerHeight($(".infoWrap").outerHeight());

//登录名图片设置
var imgWid=$(".userInfo div img").width()-$(".userInfo div").width();
if(imgWid>=0){
    $(".userInfo div img").css("transform","translateX(-"+imgWid/2+"px)")
}else{
    $(".userInfo div img").css("width","100%");
}

     //左侧导航有二级菜单的箭头
        var flag=true;
        $(".hasUl").click(function(ev){
            ev=ev||evevt;
            var oElm=ev.target||ev.srcElement;
            if(oElm==this || oElm.tagName=="IMG"){
                if(flag){
                    $(".hasUl ul").show();
                    $(".hasUl").css("border","none");
                    flag=!flag
                }else{
                    $(".hasUl ul").hide();
                    $(".hasUl").css("border-bottom","1px solid #e1e1e1");
                    flag=!flag
                }
            }
        })





    });
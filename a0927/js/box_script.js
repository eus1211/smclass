//제이쿼리
let num=0;
let num2=0;
$(function(){
    
    //우측버튼
    $("#right").click(function(){
        //alert("우클");
        if(num>900){return false}
        num +=100;
        num2 +=360;
        $("#box").stop();
        $("#box").animate({
            left:num, "rotate":num2+"deg"
        },1000);
    });

    //좌측버튼
    $("#left").click(function(){
        //alert("좌클");
        if(num<=0){return false}
        num -= 100;
        num2 -= 360;
        $("#box").stop();
        $("#box").animate({left:num,"rotate":num2+"deg" },1000);
        
    });

})//제이쿼리
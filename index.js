$(function(){
    //注文リストにインデックス追加
    $(".order-list-group-item").each(function(index){
        //console.log(index);
        $(this).find("ul li:first-child").text("注文" + (index + 1));
    });    

    //送信
    $('form').submit(function(){
        var date = "2021/10/10";
        var category = $("#category option:selected").val();
        var amount = $("#amount option:selected").val();
            
        var msg = `納品日：${date}\n種類：${category}\n個数：${amount}`;
        send_text(msg);
        
        return false;
    });

    require('dotenv').config();
    console.log(process.env.LIFF_ID);
});
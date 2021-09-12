$(function(){
    //注文リストにインデックス追加
    var $order_list = $(".order-list-group-item");
    var order_items = 1;
    $("#add-item").click(function() {
        order_items += 1;
        if (order_items < 6) {
            $order_list.clone(true).insertAfter($order_list);
            $(".order-list-group-item").each(function(index) {
                $(this).find("p:first-child").text("注文" + (index + 1));
            });

            $("html, body").animate({ scrollTop: 9999 }, 1000);
        } else {
            window.alert("商品追加は最大5つまでです。");
        }
    });

    var $date = $("#date");
    $date.on("input", function(event){
        console.log($(this).val());
    });


    //送信
    $('form').submit(function() {
        var date = $("#date input").val();
        var category = $("#category option:selected").val();
        var amount = $("#amount option:selected").val();
            
        var msg = `納品日：${date}\n種類：${category}\n個数：${amount}`;
        send_text(msg);
        
        return false;
    });
});
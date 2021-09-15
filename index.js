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
    $('#form').submit(function() {
    //$("#submit").click(function() {
        var date = $("#date").val();
        var order_nums = $(".order-list-group-item").length;
        var msg = "";

        msg += "ご注文内容\n＝＝＝＝＝＝＝＝＝＝＝\n";
        msg += `納品日：${date}`;
        msg += "\nーーーーーーーーーーー\n";

        for (var i=1; i<order_nums+1; i++) {
            var category_price = $(`"#category${i} option:selected"`).text();
            console.log(category_price);
            var category_price_array = category_price.split(" - ");
            var category = category_price_array[0];
            var price = category_price_array[1];
            console.log(price);
            var amount = $(`"#amount${i} option:selected"`).val();

            msg += `注文${i}
            ー種類：${category}
            ー個数：${amount}
            ー単価：${price}
            ーーーーーーーーーーー
            `;
            
            //send_text(msg.replace(/[\s|\t]/g, ""));
            send_text(msg);
        }
        return false;
    });
});
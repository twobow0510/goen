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

                $(this).find("p.category").attr({"id": `category${index+1}`});
                $(this).find("p.category label").attr({"for": `category${index+1}`});
                $(this).find("p.category select").attr({"name": `category${index+1}`});

                $(this).find("p.amount").attr({"id": `amount${index+1}`});
                $(this).find("p.amount label").attr({"for": `amount${index+1}`});
                $(this).find("p.amount select").attr({"name": `amount${index+1}`});
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
    $("form").submit(function() {
    //$("#submit").click(function() {
        var date = $("#date").val();
        var order_nums = $(".order-list-group-item").length;
        //var msg = "";

        var msg1 = `ご注文内容\n＝＝＝＝＝＝＝＝＝＝＝\n納品日：${date}\nーーーーーーーーーーー\n`;
        //var msg_array = [];
        var msg2 = "";
        for (var i=1; i<order_nums+1; i++) {
            var category_price = $(`#category${i} option:selected`).text();
            //console.log(category_price);
            var category_price_array = category_price.split(" - ");
            var category = category_price_array[0];
            var price = category_price_array[1];
            //console.log(price);
            var amount = $(`#amount${i} option:selected`).val();
            
            msg2 += `注文${i}\nー種類：${category}\nー個数：${amount}\nー単価：${price}\nーーーーーーーーーーー\n`;
            //msg_array.push(msg2);
        }
        send_text(msg1 + msg2);
        return false;
    });
});
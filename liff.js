<script>
  $(function(){
    //var LIFF_ID = "1656413034-7p2W052Y";
    //var LIFF_URL = "https://liff.line.me/1656413034-7p2W052Y";
    var LIFF_ID = <?= get_property_key("LIFF_ID") ?>;
    console.log(LIFF_ID);
    
    init_liff(LIFF_ID);
  });
  
  // LIFFアプリ初期化
  function init_liff(LIFF_ID) {
    liff
      .init({liffId: LIFF_ID})
      .then(() => {
        //location.replace(LIFF_URL);
        // Webブラウザからアクセスされた場合は、LINEにログインする
        if (!liff.isInClient() && !liff.isLoggedIn()) {
          window.alert("LINEアカウントにログインしてください。");
          //liff.login({redirectUri: location.href});
          liff.login({redirectUri: "https://script.google.com/macros/s/AKfycbyg31xnip0_KW-GinsHoIIZJrjEF9z7aTwggheBDt3ZHQJ6XVn1/exec"});
        }
      })
      .catch((err) => {
        console.log('LIFF Initialization failed ', err);
      });
  }
  
  function send_text(text) {
    if (!liff.isInClient()) {
      shareTargetPicker(text);
    } else {
      sendMessages(text);
    }
  }
  
  // LINEトーク画面上でメッセージ送信
  function sendMessages(text) {
    liff
      .sendMessages([{
        'type': 'text',
        'text': text
      }])
      .then(function () {
        liff.closeWindow();
      })
      .catch(function (error) {
        window.alert('Failed to send message: ' + error);
      });
  }
  
  // Webブラウザからメッセージ送信
  function shareTargetPicker(text) {
    liff
      .shareTargetPicker([{
        'type': 'text',
        'text': text
      }])
      .catch(function (error) {
        window.alert('Failed to send message ' + error);
      });
  }
</script>
<?php
    session_start();
    if(isset($_POST['submit'])){
        $name = $_POST['category1'];
        $email = $_POST['amount1'];
        $message =  $_POST['message'];
        # Instantiate the client.
        #$mgClient = new Mailgun('key-xxxxxxxx');
        #$domain = "mail.laurenfazah.com";
        # Make the call to the client.
        $result = $mgClient->sendMessage($domain, array(
            'from'    => $name . ' <' . $email . '>',
            'to'      => 'Lauren <example@gmail.com>',
            'subject' => 'Portfolio Message',
            'text'    => $message
        ));
    }
    header( 'Location: /' ) ;
    session_destroy();
?>
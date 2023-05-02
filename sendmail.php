<?php

$order = '';
foreach($_POST as $key => $var) {
    $order .= "{$key}\t{$var}\n";
}

$from = "mail@xyberpaws.io";
$to = "sales@xyberpaws.io";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: <" . $from . ">\r\n";
$headers .= "Reply-To: <" . $from . "\r\n>";
$headers .= "Date: " . date(DATE_RFC2822) . "\r\n";
$headers .= "Message-ID: <" . time() . "-" . md5($from . $to) . "@" . "{$_SERVER['SERVER_NAME']}>\r\n";

$subject = "Заказ с формы на сайте xyberpaws.io";
$message = "Поступил новый заказ с сайта xyberpaws.io:\n{$order}";


mail($to, $subject, $message);

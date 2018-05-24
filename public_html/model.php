<?php


$in_amount = $_POST['in_amount'];
$in_curr = $_POST['in_curr'];
$out_amount = $_POST['out_amount'];
$out_curr = $_POST['out_curr'];
$out_method = $_POST['out_method'];
$card_num = $_POST['card_num'];
$fio = $_POST['fio'];
$email = $_POST['email'];
$transactionNum = $_POST['$transactionNum'];
$link_get = 'http://baysale.ru/thankyoupage.php?in_amount='.$in_amount.'&in_curr='.$in_curr.'&out_amount='.$out_amount.'&out_curr='.$out_curr.'&out_method='.$out_method.'&transactionNum='.$transactionNum;


$file = 'database.txt';
$current = file_get_contents($file);
$transaction = '{'.PHP_EOL.'"in_amount": '.$in_amount.PHP_EOL.'"out_amount": '.$out_amount.PHP_EOL.'"in_curr": '.$in_curr.PHP_EOL.'"out_curr": '.$out_curr.PHP_EOL.'"out_method": '.$out_method.PHP_EOL.'"card_num": '.$card_num.PHP_EOL.'"fio": '.$fio.PHP_EOL.'"email":'.$email.PHP_EOL.'}'.PHP_EOL;
file_put_contents($file, $transaction);


require 'vendor/PHPMailer/class.phpmailer.php';
require 'vendor/PHPMailer/class.smtp.php';
$mail = new \PHPMailer;

$mail->setFrom('changebot@baysale.ru');
$mail->addAddress($email);
$mail->addReplyTo('changebot@baysale.ru');
$mail->isHTML(true);
$mail->Subject = "Обмен ".$in_curr." ––> ".$out_curr; 
$mail->Body = '<div style="width:85%; min-height: 300px; background: linear-gradient(45deg, #FF1618, #6A197C); color: white; padding:50px;">
<div style="padding: 30px; margin-bottoom:30px; border: 1px solid white; text-align:center;">
    <p>Обмен 0.02 btc   -->   12312312.23 rub на карту 12341234123</p>
  </div>
    <div style="padding: 30px;">
      <h1 style="Font-size: 30px; font-weight:bold;">Как выполнить обмен:</h1>
      <ul style="margin-bottom:50px;">
          <li><b>1.</b>Обмен производится в ручном режиме. Переведите на кошелек: 1fC2yGG7E1f6t6boMncrCSQ2s3tBZBEcx<br><br></li>
          <li><b>2.</b> Нажмите "Оплатил заявку".</li>
      <li><b>3.</b> Ожидайте обработку заявки.Ориентировачно 5-30 минут.</li>
      </ul>
      <a style="padding:15px 30px; background:white; color:#FF1618; text-align:center; text-decoration:none; border-radius: 50px; margin:50px 0 100px 0;" href="'.$link_get.'">Оплатил заявку</a>
  </div>
    <div style=" margin-top: 100px; text-align: center;">© 20016-2017 Bitex24</br>
Биткоин обмен. Просто. Быстро. Анонимно.</div>
  </div>';

if(!$mail->send()) {
  $error[] = $mail->ErrorInfo;
}
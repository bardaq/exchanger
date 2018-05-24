<!DOCTYPE html>
<html lang="ru">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Вывод биткоинов онлайн с минимальными потерями на комиссиях при обмене биткоина на карту сбербанка. Обмен Bitcoin на рубли. Продать btc за рубли с выводом на visa, qiwi, яндекс деньги, приват24. Моментальный вывод bicoin на карту.">
    <title>Вывод биткоинов на карту онлайн с минимальными потерями на комиссиях при обмене</title>
    <meta name="author" content="Maxim Borisov">
    <link href="css/new-age.css" rel="stylesheet">

  </head>

<body id="page-top">

<?php  require "nav.php"; ?>

<!-- QR MODAL -->
<div class="modal" tabindex="-1" role="dialog" id='qr-modal'>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Btc адрес для оплаты</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <img src="img/qr.svg">
        1fC2yGG7E1f6t6boMncrCSQ2s3tBZBEcx
      </div>
    </div>
  </div>
</div>



<!-- Intro -->
  <header class="intro">
    <div class="container">
      <div class="row">
        
        <!-- h1 -->
        <div class="col-lg-6">
          <h2>Заявка #<span id='transaction-num'>871</span></h2>
          <div class="transaction-info transaction-info__send"><b>Отдаете:</b><br>
            <span id="in_amount">0.1</span> <span id="in_curr">btc</span></div>
          <div class="transaction-info transaction-info__recive"><b>Получаете:</b><br> 
            <span id="out_amount">12341,22</span> <span id="out_curr">uah</span>
        </div>

          <p> <b>Cтатус заявки: </b><br><span id="transaction_status">Принята, ожидает оплаты клиентом</span></p>
        </div>


        <div class="col-xs-12 col-sm-6 border-white" id="thank_you_container">
          <h3 class="text-center" id="anchor1">Как выполнить обмен:</h3>
          <p><b>1.</b> Обмен производится в ручном режиме. Переведите <span id="out_amount_text">0.1 btc</span> на кошелек: <a href="#anchor1" data-toggle="modal" data-target="#qr-modal" ><small>1fC2yGG7E1f6t6boMncrCSQ2s3tBZBEcx</small></a><br><br>
          <a href="" data-toggle="modal" data-target="#qr-modal" ><img src="img/qr.png" width="30px"> – открыть qr код адреса</a></p>
          <p><b>2.</b> Убедитесь, что платеж отправлен и нажмите на кнопку «Я оплатил заявку» </p>
          <p><b>3.</b> Ожидайте обработку заявки. Ориентировачно 5-30 минут.</p>
         <button class="btn btn-primary btn-yellow" type="submit" id="i_have_sent">Оплатил заявку</button>
        </div> 
      </div>
    </div>
  </header>

<?php require 'footer.php'; ?>

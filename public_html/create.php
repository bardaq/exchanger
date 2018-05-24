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


<!-- Intro -->
  <header class="intro">
    <div class="container">
      <div class="row">
        
        <!-- h1 -->
        <div class="col-lg-6">
          <h2>Оформление  заявки на обмен</h2>
          <div class="transaction-info transaction-info__send"><b>Отдаете:</b><br>
            <span id="in_amount">0.000032</span> <span id="in_curr">btc</span></div>
          <div class="transaction-info transaction-info__recive"><b>Получаете:</b><br> 
            <span id="out_amount">12341,22</span> <span id="out_curr">uah</span></div>
        </div>


        <div class="col-lg-5 my-auto">

          <form class="container main-form" >
            <!-- <h3 class="text-center">Обменять</h3> -->
            <div class="row">

              <div class="main-form_send">
                <label id="label-method">Номер карты получателя</label>
                <input type="text" class="main-form_card onlyNumsInput" id="main-form_card" placeholder="0000 0000 0000 0000">

                <label>ФИО (как на карточке)</label>
                <input type="text" class="main-form_fio" id="main-form_fio" placeholder="Имя фамилия">

                <label>E-mail отправителя</label>
                <input type="text" class="main-form_email" id="main-form_email" placeholder="your@email.com">
                <p>Время выполения заявки 5-30 минут после получения платежа.</p>

                <div class="agreement">
                  <input type="checkbox" name="example" id='agreement'> <label>Введенные данные верны, ознакомлен(а) и согласен(а) с условиями <a href="terms.html">Соглашения</a> </label>
                </div>
              </div>
              

            </div>
            
            <button class="btn btn-primary" id="main-form__submit" type="submit">Обменять</button>
          </form>

        </div> 
      </div>
    </div>
  </header>

</div>
<?php require 'footer.php'; ?>

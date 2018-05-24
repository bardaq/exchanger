(function($) {
  "use strict"; // Start of use strict

// ---------------------
// ---------------------
// SCROLL ETC
// ---------------------
// ---------------------
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


var str = location.href;

// ---------------------
// ---------------------
// CREATE 
// ---------------------
// ---------------------
  if(str.indexOf('create.php') + 1) {
    let url = new URL(location.href);
    let searchParams = new URLSearchParams(url.search);
    var in_amount = searchParams.get('in_amount'); 
    var in_curr = searchParams.get('in_curr'); 
    var out_amount = searchParams.get('out_amount'); 
    var out_curr = searchParams.get('out_curr'); 
    var out_method = searchParams.get('out_method');
    var transactionNum = Math.floor( Math.random() * ( 1 + 2119 - 716 ) ) + 716 ;
    $('#in_amount').html(in_amount);
    $('#in_curr').html(in_curr);
    $('#out_amount').html(out_amount);
    $('#out_curr').html(out_curr);
    if (out_method === 'qiwi' || out_method === 'yden') { 
      $('#label-method').html('Счет / кошелек') 
      $('#main-form_card').attr('placeholder', 'Введите номер счета') 
    }
    


    $('#main-form__submit').click(function( event ) {
      event.preventDefault();

      var card_num = $('#main-form_card').val();
      var fio = $('#main-form_fio').val();
      var email = $('#main-form_email').val();

      var valid = 0;

      if ( card_num === '' ) { 
        $('#main-form_card').addClass('incorrect-input'); } else { valid += 1;}

      if ( fio === '' ) { 
        $('#main-form_fio').addClass('incorrect-input'); valid = 0; } else { valid += 1;}

      if ( !validateEmail(email) ) { 
        $('#main-form_email').addClass('incorrect-input'); valid = 0; } else { valid += 1;}

      if (!$('#agreement').prop("checked")){ 
        $('.agreement label').addClass('incorrect-input');} else { valid += 1;}

      if (valid === 4) {
        $.ajax({
          type: 'POST',
          url: 'model.php',
          data: { 
            in_amount: in_amount, 
            in_curr: in_curr, 
            out_amount: out_amount,
            out_curr: out_curr,
            out_method: out_method,
            card_num: card_num,
            transactionNum: transactionNum,
            fio: fio,
            email: email
          },
          success: function(data){
            location="transaction.php?in_amount="+in_amount+"&in_curr="+in_curr+"&out_amount="+out_amount+"&out_curr="+out_curr+"&transactionNum="+transactionNum+"&fio="+fio+"&email="+email;
          }
        })

       
      }
    });
  }


// ---------------------
// ---------------------
// TRANSACTION 
// ---------------------
// ---------------------
 else if(str.indexOf('transaction.php') + 1) {
    let url = new URL(location.href);
    let searchParams = new URLSearchParams(url.search);
    var in_amount = searchParams.get('in_amount'); 
    var in_curr = searchParams.get('in_curr'); 
    var out_amount = searchParams.get('out_amount'); 
    var out_curr = searchParams.get('out_curr'); 
    var transactionNum = searchParams.get('transactionNum');
    var fio = searchParams.get('fio'); 
    var email = searchParams.get('email'); 


    $('#in_amount').html(in_amount);
    $('#in_curr').html(in_curr);
    $('#out_amount').html(out_amount);
    $('#out_curr').html(out_curr);
    $('#out_amount_text').html(in_amount+' '+in_curr);
    $('#transaction-num').html(transactionNum);

    $('#main-form__submit').click(function( event ) {
      event.preventDefault();

    });

    $('#i_have_sent').click(function( event ) {
      event.preventDefault();
      $('#thank_you_container').html('<h3>Спасибо!</h3><p>Ваша заявка обрабаывается системой.</p>')
      $('#transaction_status').html('Проверяем получение оплаты.')
      $.ajax({
          type: 'POST',
          url: 'done.php',
          data: { 
            in_amount: in_amount, 
            in_curr: in_curr, 
            out_amount: out_amount,
            out_curr: out_curr,
            out_method: out_method,
            out_method: out_method,
            transactionNum: transactionNum,
            fio: fio,
            email: email
          }
        })
    });
  }
// ---------------------
// ---------------------
// THANKYOU
// ---------------------
// ---------------------
  else if(str.indexOf('thankyoupage.php') + 1) {
    let url = new URL(location.href);
    let searchParams = new URLSearchParams(url.search);
    var in_amount = searchParams.get('in_amount'); 
    var in_curr = searchParams.get('in_curr'); 
    var out_amount = searchParams.get('out_amount'); 
    var out_curr = searchParams.get('out_curr'); 
    var transactionNum = searchParams.get('transactionNum'); 

    $('#in_amount').html(in_amount);
    $('#in_curr').html(in_curr);
    $('#out_amount').html(out_amount);
    $('#out_curr').html(out_curr);
    $('#out_amount_text').html(in_amount+' '+in_curr);
    $('#transaction-num').html(transactionNum);
    
    // $.ajax({
    //   type: 'POST',
    //   url: 'done.php',
    //   data: { 
    //     in_amount: in_amount, 
    //     in_curr: in_curr, 
    //     out_amount: out_amount,
    //     out_curr: out_curr,
    //     out_method: out_method,
    //     out_method: out_method,
    //     transactionNum: transactionNum,
    //     fio: fio,
    //     email: email
    //   }
    // })

  }
  // ---------------------
// ---------------------
// HOME
// ---------------------
// ---------------------
  else {
      var in_curr = $('#in_curr').val();
      var out_curr = $('#out_curr').val();
      var out_method = $('#out_curr').data('method');
      var in_amount = '';
      var out_amount = '';

      $('.main-form input, .main-form select').change(function( elent ) {
        
        in_amount = $('#in_amount').val();
        out_amount = $('#out_amount').val();
        out_curr =  $('#out_curr').val();
        if (out_curr === 'rub'){ 
          $('#reserved_amount').html('1,342,132.10 RUB')}
        else if(out_curr === 'usd'){
          $('#reserved_amount').html('3,132.84 USD')}
        else if(out_curr === 'uah'){
          $('#reserved_amount').html('212,001.10 UAH')}

        $.ajax({
          type: 'GET',
          url: 'https://api.cryptonator.com/api/ticker/btc-'+out_curr,
          success: function(data){

            var rate = data.ticker.price ;
            out_amount = parseFloat(((in_amount*rate)*0.96).toFixed(2));
            $('#out_amount').val(( out_amount ));

          }
        })
      })

      $('#main-form__submit').click(function( event ) {
        event.preventDefault();
        out_method = $('#out_curr').children('option:selected').data('method')
        if ($('#in_amount').val() === '') { alert('введите количество bitconin которое хотите обменять.') }
        else {
          location="create.php?in_amount="+in_amount+'&in_curr='+in_curr+'&out_amount='+out_amount+'&out_curr='+out_curr+'&out_method='+ out_method;
        }
      });
  }



  // ---------------------
  // ---------------------
  // EMAIL VALIDATOR
  // ---------------------
  // ---------------------
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

  // ---------------------
  // ---------------------
  // ONLY NUMBERS INPUT
  // ---------------------
  // ---------------------
    $('.onlyNumsInput').keydown(function(event) {
        if (event.keyCode == 190 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
            ((event.ctrlKey || event.metaKey) && event.which == 97) ||
            ((event.ctrlKey || event.metaKey) && event.which == 65) ||
            ((event.ctrlKey || event.metaKey) && event.which == 86) ||
            ((event.ctrlKey || event.metaKey) && event.which == 67) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
              return;
        }
        else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }
        }
    });



})(jQuery); // End of use strict

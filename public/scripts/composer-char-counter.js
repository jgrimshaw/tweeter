$(document).ready(function() {
 console.log('hi from the char.counter!')


  $('.new-tweet form textarea').on('input', function(){
    const allowedChar = 140;
    //catach the count and put it in the currentChar
    let currentChar = ($(this).val().length);
    if(currentChar > allowedChar){
      $('#textarea').addClass("overlimit");
      $('output').addClass("overlimit");
    } else {
      $('#textarea').removeClass("overlimit");
      $('output').removeClass("overlimit");
    }
    let charLeft = allowedChar - $(this).val().length;
      $('output').text(charLeft);
    })
  });




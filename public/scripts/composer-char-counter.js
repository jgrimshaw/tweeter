$(document).ready(function() {
 console.log('hi from the char.counter!')


 $('.new-tweet form textarea').on('keydown', function(){
  const allowedChar = 140;
  // // catach the count and put it in the currentChar
  let currentChar = $(this).val().length;


  if(currentChar < allowedChar){
    console.log(currentChar)

  } else {
    console.log(0 - currentChar)
  }

  })
  })








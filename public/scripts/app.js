
function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function createTweetElement (data){
    let username = data.user.name;
    let avatar = data.user.avatars.small;
    let userId = data.user.handle;
    let tweetText = escape(data.content.text);
    let time = daysAgo(data.created_at);

    let $tweet = `
      <article class='tw-article'>
        <header class='tw-header'>
          <img class='tw-avatar' src=${avatar}>
          <h2 class='tw-h2'>${username}</h2>
          <span class='tw-name'>${userId}</span>
        </header>
            <p class='tw-p'>${tweetText}</p>
        <footer class='tw-footer'>
          <time>${time}</time>
          <span class='icons'><i class='fas fa-flag'>&nbsp</i><i class='fas fa-retweet'>&nbsp</i><i class='fas fa-heart'></i><div>
        </footer>
      </article>
  `;
  return $tweet;
}

function renderTweets(data){
  for(let i = 0; i < data.length; i++){
      let $newTweet = createTweetElement(data[i]);
      $('.tweets-container').append($newTweet);
  }
}

function daysAgo(date){
  let days = Math.ceil((Date.now() - date) / 86400000);
  return `${days} days ago`
}

function loadTweets(){
    $.get({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: function (data) {
        renderTweets(data);
        console.log('Success!');
      }
    });
  }


function postTweet(tweetText) {
  $.post({
    url: 'http://localhost:8080/tweets',
    method: 'POST',
    data: {text: tweetText},
    success: loadTweets
  })
}

function submitTweetHandler(event) {
  event.preventDefault();
  let tweetText = $('textarea').val();
  if(!($('.error').css('display') === 'none')){
    $('.error').slideUp();
  }

  if(tweetText.length > 140) {
    $('.error').slideDown('slow', function(){
      document.querySelector('.error').innerHTML = 'Your tweet is too long...'
    })

  } else if(tweetText.length <= 0){
      $('.error').slideDown('slow', function(){
        $(this).text('Your tweet seems empty, try again!')
    })

  } else {
      console.log('Submiting tweet...');
      postTweet(tweetText)
      $('textarea').val('');
      $('.counter').val(140);
    }
}

function toggleCompose() {
  $('.new-tweet').toggle('fast');
  $('textArea').select();
}

$(document).ready($(function() {
  loadTweets()
  $('.tweet-form').on('submit', submitTweetHandler);
  $('.compose-button').click(toggleCompose);
}));

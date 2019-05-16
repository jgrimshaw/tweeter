
function createTweetElement (data){
    let username = data.user.name;
    let avatar = data.user.avatars.small;
    let userId = data.user.handle;
    let tweetText = data.content.text;
    let time = data.created_at;

    let $tweet = $(".tweets-container").append(`

      <article class="tw-article">
        <header class="tw-header">
          <img class="tw-avatar" src=${avatar}>
          <h2 class="tw-h2">${username}</h2>
          <span class="tw-name">${userId}</span>
        </header>
            <p class="tw-p">${tweetText}</p>
        <footer class="tw-footer">
          <time>${time}</time>
          <span class="icons"><i class="fas fa-flag">&nbsp</i><i class="fas fa-retweet">&nbsp</i><i class="fas fa-heart"></i><div>
        </footer>
      </article>

  `);
  return $tweet;
}

function renderTweets(data){
  for(let i = 0; i < data.length; i++){
      let $newTweet = createTweetElement(data[i]).text;
      $(".tweets-container").append($newTweet);
  }
}

$(document).ready($(function() {
    let $form = $('.tweet-form');
    $form.on('submit', function (event) {
      event.preventDefault();
      let tweetText = $('textarea').val();
      console.log(tweetText.length);
      if( tweetText.length > 140 || tweetText.length <= 0){
          alert("Your tweet is too long or too short!");
      } else {
          console.log('submiting tweet...');
          $.post({
            url: 'http://localhost:8080/tweets',
            method: 'POST',
            data: {text: tweetText},
            success: function(data){
              $('.newTweet').after(createTweetElement(data));
              $('.container').text
            }
          })
      }
});

$.getJSON({
  url: 'http://localhost:8080/tweets',
  method: 'GET',
  data: {get_param: 'value'},
  success: function (data) {
  renderTweets(data);
  console.log('Success!');
  }
  });
}))
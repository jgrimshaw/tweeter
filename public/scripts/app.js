
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461113796368
//   }
// ];

$(function() {


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
      let $newTweet = createTweetElement(data[i]);
      $(".tweets-container").append($newTweet);
  }
}

$(".tweet-form").on("submit",function(event) {
  event.preventDefault();
  const $form = $(".tweet-form")
  const data = $form.serialize();
  console.log("tweet:", data);

  $.post("/tweets", data)
  .then((tweet) => {
    console.log("tweeting from server!!")

    const elm = createTweetElement(tweet);
    $(".tweet-container").prepend(elm);
    this.reset()
  })
  .catch((err) => {
    console.log(err);
    alert("Error: please try again.")
  });

});




function loadTweets() {
  $.get('/tweets/'), function (tweets) {
    console.log(tweets);

    for(let content in tweets){
      console.log(tweets[content]);
      let elm = createTweetElement(tweets[content]);
      $(".tweet-container").append(elm)
    }
  }
}

loadTweets();

});
//==========================================
// // Attach a submit handler to the form
// $( ".tweet-form" ).submit(function( event ) {
//   event.preventDefault();
//   // Get some values from elements on the page:
//   let newTweet = $(this).serialize()

//   // Send the data using post
//   $.post('/tweets', newTweet, function(data){
//     $('.tweets-container').prepend(createTweetElement(data));
//       console.log('post !!!!!!!!!!!!')
//   } );


//   //Ajax Function to send a get request

// $(function() {
//   var $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax('more-posts.html', { method: 'GET' })
//     .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//     });
//   });
// });
// //   $.ajax({
// //     type: "GET",
// //     url: "/tweets",
// //     dataType:"json"
// //     success: function(response){
// //         //if request if made successfully then the response represent the data
// // console.log('get !!!!!!!!!')
// //         $( "#result" ).empty().append( response );
// //     }
// //   });

// // });

// //=========================================
// // AJAX POST request
// // $(".tweet-form").submit(function( event ) {
// //   event.preventDefault();
// //     let newTweet = $(this).serialize();
// //     $.post('/tweets', newTweet, function (data) {
// //       $('.tweets-container').prepend(createTweetElement(data));
// //       console.log('where is this going?')
// //     });
// // });

// // AJAX GET request


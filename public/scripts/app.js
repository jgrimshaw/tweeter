/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



// // Test / driver code (temporary)
// console.log(tweet); // to see what it looks like
// $('#tweets-container').append(tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



  // loops through tweets
  function renderTweets(data){
    for (var i = 0; i < data.length; i++){
        let $newTweet = createTweetElement(data[i]);
        $('#tweets-container').append($newTweet);
    }
  }




    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container



$(document).ready(renderTweets(data));


function createTweetElement (data){
  console.log('works or not?!');

    let username = data.user.name;
    let avatar = data.user.avatars.small;
    let userId = data.user.handle;
    let tweetText = data.content.text;
    let time = data.created_at;

    let $tweet = $("#container").append(`
    <section id="container">
        <article class="tw-article">
          <header class="tw-header">
          <img class="tw-avatar" src=${avatar}>

          <div class="tw-header-items">
            <h2 class="tw-h2">${username}</h2>
            <span class="tw-name">${userId}</span>
          </div>

          </header>
            <p class="tw-p">${tweetText}</p>
          <footer class="tw-footer">
            <div>${time}</div>
            <span class="icons"><i class="fas fa-flag">&nbsp</i><i class="fas fa-retweet">&nbsp</i><i class="fas fa-heart"></i><div>
          </footer>
        </article>
      </section>
    `);
    return $tweet;
}




var $tweet = createTweetElement(data);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweet-container').append($tweet)
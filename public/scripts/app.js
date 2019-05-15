
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
      "text": "If I have seen further it is by standing on the shoulders of giants"
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
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461113796368
  }
];

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

$(document).ready(renderTweets(data));

function renderTweets(data){
  for(let i = 0; i < data.length; i++){
      let $newTweet = createTweetElement(data[i]);
      $(".tweets-container").append($newTweet);
  }
}






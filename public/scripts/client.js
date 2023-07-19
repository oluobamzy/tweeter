/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  const users = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1689602744781
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1689689144781
    }
  ];

  function timeAgo(timestamp) {
    // Convert timestamp to time ago format (e.g., "10 days ago")
    // You can implement this function or use a library like moment.js
    // Here's a simple example:
    const now = Date.now();
    const timeDiff = now - timestamp;
    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysAgo + " days ago";
  };



  const renderTweets = (tweets) => {
    const $tweetsContainer = $('#loaded-articles');

    tweets.forEach((tweetData) => {
      const $tweetElement = createTweetElement(tweetData);
      $tweetsContainer.append($tweetElement);
    });
  };

  const createTweetElement = (obj) => {
    const tweet = $(` <article>
    <header class="tweets-header">
         <div class="profile-area">
         <img src="${obj.user.avatars}" alt="Profile Image">
         <p>${obj.user.name}</p>
         </div>
         <p>${obj.user.handle}</p>
    </header>
    <p class="display-text">${obj.content.text}</p>
     <span class='line'></span>
    <footer class="tweets-footer">
    <p>${timeAgo(obj.created_at)}</p>
       <div class="icons-footer">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
       </div>

    </footer>
  </article>`);


    return tweet;
  };


  renderTweets(users);
})



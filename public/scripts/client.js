/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  const renderTweets = (tweets) => {
    const $tweetsContainer = $('#loaded-articles');
    tweets.forEach((tweetData) => {
      const $tweetElement = createTweetElement(tweetData);
      $tweetsContainer.prepend($tweetElement);
    });
  };

  const createTweetElement = (obj) => {
    const tweet = $(`<article>
      <header class="tweets-header">
        <div class="profile-area">
          <img src="${escapeHTML(obj.user.avatars)}" alt="Profile Image">
          <p>${escapeHTML(obj.user.name)}</p>
        </div>
        <p>${escapeHTML(obj.user.handle)}</p>
      </header>
      <p class="display-text">${escapeHTML(obj.content.text)}</p>
      <span class='line'></span>
      <footer class="tweets-footer">
        <p>${escapeHTML(timeago.format(obj.created_at))}</p>
        <div class="icons-footer">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart">1</i>
        </div>
      </footer>
    </article>`);

    return tweet;
  };

  // Function to escape HTML entities
  function escapeHTML(html) {//This is to implement cross site scripting xss
    return $('<div>').text(html).html();
  }


  $("#myform").on('submit', function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
    let $counter = parseInt($('.counter').text());
    if ($counter < 0) {
      $(".error-message").slideDown();
      return false; // Prevent form submission if count is negative.
    }

    if ($counter === 140) {
      $(".error-message").slideDown();
      return false; // Prevent form submission if count is exactly 140.
    }

    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: formData,
      success: function(response) {
        console.log(response);
        $(".error-message").slideUp();
        loadTweets();
      },
      error: function(error) {
        console.error(error);
        $(".error-message").slideUp();
      }
    });
  });


  const loadTweets = () => {
    const url = "/tweets";
    $.ajax({
      url: url,
      type: "GET",
      success: function(response) {
        renderTweets(response);
        $('#myform')[0].reset();
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  };
  loadTweets();

})



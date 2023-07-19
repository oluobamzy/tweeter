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
    <p>${timeago.format(obj.created_at)}</p>
       <div class="icons-footer">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
       </div>

    </footer>
  </article>`);


    return tweet;
  };

  $("#myform").on('submit',function(event){
    event.preventDefault();
   // console.log(this);
    const formData = $(this).serialize();
    let $counter = parseInt($('.counter').text());
    if ($counter < 0) {
      alert("Only 140 characters are allowed❌❌❌");
      return false; // Prevent form submission if count is negative.
    }
    
    if ($counter === 140) {
      alert("Empty input");
      return false; // Prevent form submission if count is exactly 140.
    }

    $.ajax({
      url: '/tweets', 
      type: 'POST',
      data: formData,
      success: function(response) {
        // Handle the server response here
        console.log(response);
      },
      error: function(error) {
        // Handle errors here
        console.error(error);
      }
    });
  });


  const loadTweets = ()=>{
    const url = "/tweets";

   $.ajax({
    url: url,
    type: "GET",
    success: function(response){
      //handle response
      renderTweets(response);
    },
    error: function(xhr,status,error){
        console.log(error);
    }


   })
  
  }
  loadTweets();

})



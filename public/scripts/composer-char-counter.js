$(document).ready(function() {
  $('#tweet-text').on('input', function(event) {
    const changingLength = $(this).val().length;
    const maxLength = 140;
    const count = maxLength - changingLength;
    $(".counter").text(count);
    if (count < 0) {
      $(".counter").addClass('above');
    }
    else {
      $(".counter").removeClass('above');
    }
  });
  $(".fa-solid").addClass('hover-effect');
});

  var $galImg = $('.gal-wrap img');
  var width = $galImg.width();
  var count = $galImg.length;
  var isAnimate = false;

$('.next').click(function () {
  helper(false);
});

$('.prev').click(function () {
  helper(true);
});

function helper(revers) {
  if (isAnimate) {
    return;
  }
  var $galImg = $('.gal-wrap img');

  var currentPosition = $('.gal-inner').css('margin-left');

  var newPosition;

  currentPosition = parseInt(currentPosition);

  if (revers) {
    newPosition = currentPosition + width;

    if (currentPosition === 0){
      $galImg.last().prependTo('.gal-inner')
      $('.gal-inner').css('margin-left', -width);
      newPosition = 0;
    }
  } else {
      newPosition = 0;
      if (currentPosition !== -width * (count - 1)){
        newPosition = currentPosition - width;
      } else {

          $galImg.first().appendTo('.gal-inner');
          $('.gal-inner').css('margin-left', currentPosition
                  + width);
          newPosition = currentPosition;
        }
  }

  isAnimate = true;
  $('.gal-inner').animate({marginLeft: newPosition}, 400, function() {
    isAnimate = false;
    });
}

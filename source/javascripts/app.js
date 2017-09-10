$(function() {
  // audio.js playlist
  // Setup the player to autoplay the next track
  var a = audiojs.createAll({
    trackEnded: function() {
      var next = $('ol li.playing').next();
      if (!next.length) next = $('ol li').first();
      next.addClass('playing').siblings().removeClass('playing');
      audio.load($('a', next).attr('data-src'));
      audio.play();
    },
    imageLocation: 'javascripts/vendor/audiojs/player-graphics.gif',
    swfLocation: 'javascripts/vendor/audiojs/audiojs.swf'
  });

  // Load in the first track
  var audio = a[0];
      first = $('ol a').attr('data-src');
  $('ol li').first().addClass('playing');
  audio.load(first);

  // Load in a track on click
  $('ol li').click(function(e) {
    e.preventDefault();
    $(this).addClass('playing').siblings().removeClass('playing');
    audio.load($('a', this).attr('data-src'));
    audio.play();
  });

  // accordions
  $('.content--info').find('.wrapper-trigger').on('click', function(e) {
    //Expand or collapse this panel
    $(this).next().slideToggle();
    $(this).parent().toggleClass('is-open');

    //Hide the other panels
    $('.wrapper').not($(this).next()).slideUp();
    $('.wrapper').not($(this).next()).parent().removeClass('is-open');
  });
});

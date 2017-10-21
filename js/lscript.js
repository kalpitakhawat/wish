function newHeart () {
    var hearts = $('.heart');
    if (hearts.length >= 24) return setTimeout(newHeart, 1000);
    var c = $('.heart-container:first').clone();
    var anims = ['swing', 'spin'];
    var a = anims[Math.round(Math.random())];
    c.find('.heart')
                  .css('opacity', 0.2 + Math.random() * 0.8)
                  .css('-webkit-animation-name', a)
                  .css('-moz-animation-name', a);
    c.css('left', (10 + Math.random() * ($('body').innerWidth() - 10)) + 'px');
    c.css('-webkit-animation-name', 'fall');
    c.css('-webkit-animation-duration', (4 + Math.random() * 14) + 's');
    c.css('-webkit-transform', 'scale(' + (0.4 + Math.random() * 2) + ')');
    c.css('-moz-animation-duration', (4 + Math.random() * 14) + 's');
    c.css('-moz-transform', 'scale(' + (0.4 + Math.random() * 2) + ')');
    $('#hearts').append(c);
    c.bind('animationend', function () { c.remove(); });
    c.bind('webkitAnimationEnd', function () { c.remove(); });
    setTimeout(newHeart, 200);
}
setTimeout(newHeart, 200);
 $(window).load(function () {
   $('#msg').html(window.atob($_GET('msg')));
   $('#name').html(window.atob($_GET('name')));
 });

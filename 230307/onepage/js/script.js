$(function() {
  $('nav a').click(function(e) {
    $.scrollTo(this.hash || 0, 1000);
    e.preventDefault();
  });
});
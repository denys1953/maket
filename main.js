$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('#slide').slideToggle('fast');
  $('body').toggleClass('active');
  setTimeout(function(){
    $('.wrapper-header').toggleClass('active')
  }, 80)
  // $('.wrapper-header').animate({
  //   zIndex: 9999,
  //   zIndex: 0
  // }, 'fast', function(){

  // })
});

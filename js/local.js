$(document).ready(function(){
    $('.sidenav').sidenav();
  });
	
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  $(document).ready(function(){
    $('.slider').slider();
  });
  $(document).ready(function(){
    $('select').formSelect();
  });
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  })
  
$(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $('#test').hover(
    function(){ $(this).addClass('center') },
    function(){ $(this).removeClass('center') }
)
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});
$(document).ready(function(){
  $('ul.tabs').tabs({
    swipeable : true
  });
});
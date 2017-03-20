
$(document).ready(function(){
	$('.button-collapse').click(function(){
		$('#nav-icon1').toggleClass('open');
	});

$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
      // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');


  // Slide inicial

  // Fin del slide inicial

  // Modal
    $('.modal').modal();
  // inicio de menu fixe single


  $("#bar_up").stick_in_parent()
  .on("sticky_kit:stick", function(e) {
   $(".share__single").addClass("show_hidden_s");
   $(".title__bar__single").addClass("show_hidden");
   $(".time__single").addClass("hidden_show");
   $(".date__single").addClass("hidden_show");

  })
  .on("sticky_kit:unstick", function(e) {
    $(".share__single").removeClass("show_hidden_s");
    $(".time__single").removeClass("hidden_show");
    $(".date__single").removeClass("hidden_show");
    $(".title__bar__single").removeClass("show_hidden");
  });

});
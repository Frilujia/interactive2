$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '30px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 200 );
	});

	$('#button-4').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-5').click(function() {
		$(this).next('.item').toggleClass('circle');
	});



		$('#button-19').click(function() {
		$(this).next('.item').toggleClass('rotation');
	});

$(function() {
  $('').click(function() {
    $('.no-margin').css()
  }
}

 $('.item').each(function(){
        var imageNum = Math.floor(Math.random() * 10);
        $(this).css('background-image', 'url(image-name-'+imageNum+')')
    })



});
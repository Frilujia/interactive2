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

// $(function() {
//   $('').click(function() {
//     $('.no-margin').css()
//   }
// }

var setNum = Math.floor(Math.random() * 6);


$('.item').each(function(){
       var imageNum = Math.floor(Math.random() * 11 + 1);
       $(this).css('background-image', 'url('+setNum+'-'+imageNum+'.png)')
   })

var Color; 

    $('.box').click(function(){
        $(this).css('background', Color);
    });  

    $('#Red').click(function(){
        Color = ' #B30000';
    });

    $('#Yellow').click(function(){
        Color = '#E5B001';
    });


    $('#Blue').click(function(){
        Color = '#354387';
    });


    function myFunction() {
        $('body').css('background', 'blue');
    //document.body.style.backgroundColor = "red";
    }
    


});
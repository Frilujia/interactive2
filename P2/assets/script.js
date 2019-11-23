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
        Color = '#bf350b';
    });

    $('#Yellow').click(function(){
        Color = '#E5B001';
    });


    $('#Blue').click(function(){
        Color = '#45658c';
    });


    function myFunction() {
        $('body').css('background', 'blue');
    //document.body.style.backgroundColor = "red";
    }
    



  $('#click-area').click(function(){
    var clone = $('#position').clone();
    $('body').append(clone);
  }



});

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}



});
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
    
function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        const height = original_height + (e.pageY - original_mouse_y)
        const width = original_width - (e.pageX - original_mouse_x)
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
      }
      else if (currentResizer.classList.contains('top-right')) {
        const width = original_width + (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
}

makeResizableDiv('.resizable')

makeResizableDiv('.resizable2')

makeResizableDiv('.resizable3')

makeResizableDiv('.resizable4')

makeResizableDiv('.resizable5')

makeResizableDiv('.resizable6')

makeResizableDiv('.resizable7')

makeResizableDiv('.resizable8')

makeResizableDiv('.resizable9')

makeResizableDiv('.resizable10')

makeResizableDiv('.resizable11')

makeResizableDiv('.resizable12')



Resources



});
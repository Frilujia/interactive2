$(document).ready(function(){
    // $('body').click(function(){
    //     $('html, body').animate({scrollLeft: $('#five').position().left}, 500);
    // });

    

    $('.letter').hover(
        function() {
            $(this).find('div').each(function() {
                $(this).addClass('animation-' + Math.floor(Math.random() * 5 + 1));

                $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                    $(this).addClass('animation-' + Math.floor(Math.random() * 4 + 1));
                });
            });
        }, function() {
            $('div').removeClass('animation-1 animation-2 animation-3 animation-4');
        }
    );
    

    $(document).keypress(function(e) {
            
        // the keycode for 'a' is 97
        if ( e.which == 97 ) {
            $('html, body').animate({scrollLeft: $('#a').position().left}, 500);
        }

         if ( e.which == 98 ) {
            $('html, body').animate({scrollLeft: $('#b').position().left}, 500);
        }

        if ( e.which == 113 ) {
            $('html, body').animate({scrollLeft: $('#q').position().left}, 500);
        }

         if ( e.which == 119 ) {
            $('html, body').animate({scrollLeft: $('#w').position().left}, 500);
        }

        if ( e.which == 101 ) {
            $('html, body').animate({scrollLeft: $('#e').position().left}, 500);
        }

         if ( e.which == 114 ) {
            $('html, body').animate({scrollLeft: $('#r').position().left}, 500);
        }

        if ( e.which == 116 ) {
            $('html, body').animate({scrollLeft: $('#t').position().left}, 500);
        }

         if ( e.which == 121 ) {
            $('html, body').animate({scrollLeft: $('#y').position().left}, 500);
        }

        if ( e.which == 117 ) {
            $('html, body').animate({scrollLeft: $('#u').position().left}, 500);
        }

         if ( e.which == 105 ) {
            $('html, body').animate({scrollLeft: $('#i').position().left}, 500);
        }

         if ( e.which == 111 ) {
            $('html, body').animate({scrollLeft: $('#o').position().left}, 500);
        }

        if ( e.which == 112 ) {
            $('html, body').animate({scrollLeft: $('#p').position().left}, 500);
        }

         if ( e.which == 115 ) {
            $('html, body').animate({scrollLeft: $('#s').position().left}, 500);
        }

        if ( e.which == 100 ) {
            $('html, body').animate({scrollLeft: $('#d').position().left}, 500);
        }

         if ( e.which == 102 ) {
            $('html, body').animate({scrollLeft: $('#f').position().left}, 500);
        }

        if ( e.which == 103 ) {
            $('html, body').animate({scrollLeft: $('#g').position().left}, 500);
        }

         if ( e.which == 104 ) {
            $('html, body').animate({scrollLeft: $('#h').position().left}, 500);
        }

        if ( e.which == 106 ) {
            $('html, body').animate({scrollLeft: $('#j').position().left}, 500);
        }

         if ( e.which == 107 ) {
            $('html, body').animate({scrollLeft: $('#k').position().left}, 500);
        }

         if ( e.which == 108 ) {
            $('html, body').animate({scrollLeft: $('#l').position().left}, 500);
        }

        if ( e.which == 122 ) {
            $('html, body').animate({scrollLeft: $('#z').position().left}, 500);
        }

        if ( e.which == 120 ) {
            $('html, body').animate({scrollLeft: $('#x').position().left}, 500);
        }

         if ( e.which == 99 ) {
            $('html, body').animate({scrollLeft: $('#c').position().left}, 500);
        }

         if ( e.which == 118 ) {
            $('html, body').animate({scrollLeft: $('#v').position().left}, 500);
        }

         if ( e.which == 110 ) {
            $('html, body').animate({scrollLeft: $('#n').position().left}, 500);
        }

        if ( e.which == 109 ) {
            $('html, body').animate({scrollLeft: $('#m').position().left}, 500);
        }

        if ( e.which == 49 ) {
            $('html, body').animate({scrollLeft: $('#one').position().left}, 1000);
        }

         if ( e.which == 50 ) {
            $('html, body').animate({scrollLeft: $('#two').position().left}, 1000);
        }

         if ( e.which == 51 ) {
            $('html, body').animate({scrollLeft: $('#three').position().left}, 1000);
        }

         if ( e.which == 52 ) {
            $('html, body').animate({scrollLeft: $('#four').position().left}, 10600);
        }

        if ( e.which == 53 ) {
            $('html, body').animate({scrollLeft: $('#five').position().left}, 500);
        }

         if ( e.which == 54 ) {
            $('html, body').animate({scrollLeft: $('#six').position().left}, 500);
        }

                 if ( e.which == 55 ) {
            $('html, body').animate({scrollLeft: $('#seven').position().left}, 500);
        }

         if ( e.which == 56 ) {
            $('html, body').animate({scrollLeft: $('#eight').position().left}, 500);
        }

         if ( e.which == 57 ) {
            $('html, body').animate({scrollLeft: $('#nine').position().left}, 500);
        }

         if ( e.which == 48 ) {
            $('html, body').animate({scrollLeft: $('#zero').position().left}, 500);
        }

         if ( e.which == 44 ) {
            $('html, body').animate({scrollLeft: $('#comma').position().left}, 500);
        }

         if ( e.which == 34 ) {
            $('html, body').animate({scrollLeft: $('#qml').position().left}, 500);
        }

                 if ( e.which == 34 ) {
            $('html, body').animate({scrollLeft: $('#qmr').position().left}, 500);
        }

         if ( e.which == 33 ) {
            $('html, body').animate({scrollLeft: $('#em').position().left}, 500);
        }
         if ( e.which == 46 ) {
            $('html, body').animate({scrollLeft: $('#period').position().left}, 500);
        }

         if ( e.which == 63 ) {
            $('html, body').animate({scrollLeft: $('#qm').position().left}, 500);
        }


    });    
});























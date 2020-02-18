"use strict";
$(document).ready(function () {
    let count = 0;
    let width = $(window).width();
    console.log(width);
    let counter = setInterval(function () {
        if (count < 101) {
            $(".count p").text(count + ' %');

            TweenLite.to($('.count'), {
                boxShadow: `0 0 0 ${((width) / 2 * count / 100)}px white`,
                ease: Power1.easeInOut,
            });

            count++;


        } else {
            count += 1;
            if (count == 102) {
                TweenLite.to($('.count'), 1, {
                    boxShadow: `0 0 0 0 white`,
                    ease: Power1.easeInOut,
                });

                TweenLite.to($('.count p'), .5, {
                    opacity: 0,
                    delay: 1
                });

                setTimeout(function () {
                    $('section.loader').remove();
                    $('section.main_content').fadeTo('fast', 1)
                    $('section#background').fadeTo('fast', 1)

                }, 1800)
            }
            clearInterval(counter);

        }
    }, 60);


});
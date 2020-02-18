"use strict";

let block, topBlock, leftBlock, wBlock, hBlock;
let target_item = $('.block');
let parralax_item = $('#background p');
let block_mouse = $('.circle');
block = target_item.offset();

$(document).ready(function () {
    let mouse = new TimelineLite();
    topBlock = block.top;
    leftBlock = block.left;
    wBlock = target_item.width();
    hBlock = target_item.height();
    let isHover;
    // console.log(topBlock + ' / ' + leftBlock);

    $(window).resize(function () {
        block = target_item.offset();
        topBlock = block.top;
        leftBlock = block.left;
        wBlock = target_item.width();
        hBlock = target_item.height();
        console.log('resized');
        console.log(topBlock + ' / ' + leftBlock);


    });

    function followMouse(e) {
        TweenLite.to(block_mouse, {
            css: {
                left: e.pageX,
                top: e.pageY
            }
        });

        TweenLite.to(target_item, {
            scale: 1,
            ease: Power2.easeOut,

        });

        TweenLite.to(block_mouse, {
            scale: 1,
            borderStyle: 'solid',
            ease: Power2.easeOut,


        });

        TweenLite.to($('.block a'), {
            scale: 1,
            ease: Power2.easeOut,

        });

    }

    console.log(block_mouse.offset())

    function stopMouse() {

        TweenLite.to(block_mouse, {
            css: {
                left: leftBlock + (wBlock / 2),
                top: topBlock + (hBlock / 2),
            },
            ease: Power2.easeOut,
        });
        TweenLite.to(target_item, {
            scale: .4,
            ease: Power2.easeOut,

        });

        TweenLite.to($('.block a'), {
            scale: 2,
            ease: Power2.easeOut,

        });

        console.log(topBlock + ' / ' + leftBlock);
        console.log(block_mouse.offset())

    }

    function parallaxIt(e, target, movement) {
        var $this = $('#background');
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        $(window).resize(function () {
            relX = e.pageX - $this.offset().left;
            relY = e.pageY - $this.offset().top;
        })

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }

    $(window).on('mousemove', followMouse);
    $(window).mousemove(function (e) {
        parallaxIt(e, parralax_item, -15);

    });

    target_item.hover(function () {
        isHover = 1;
        // console.log(isHover);
        stopMouse();
        TweenLite.to(block_mouse, .5, {
            scale: 1.8,
            ease: Power2.easeOut,

        });
        $(window).off('mousemove', followMouse);


    }, function () {
        isHover = 0;
        $(window).on('mousemove', followMouse);
        // $('.circle h1').remove();

    });




    $(document).on('click', '.menu>a', function (e) {
        e.preventDefault();
        console.log('clicked');

        TweenMax.staggerTo($('.empty_content'), 0.5, {
                css: {
                    'margin-top': 0
                },
                ease: Power1.easeInOut
            },
            .1
        );
        $('.grid-container').addClass('active')
    });


    if ($('.grid-container').hasClass('active')) {
        $(document).click(function (e) {
            console.log('clicker bande de salope')

        })
    }


    // if ($('.grid-container').hasClass('active')) {
    //     $(document).on('click', function () {
    //         console.log('clicker bande de salope')
    //         TweenMax.staggerTo($('.empty_content'), 0.5, {
    //                 css: {
    //                     'margin-top': '-100vh'
    //                 },
    //                 ease: Power1.easeInOut
    //             },
    //             .1
    //         );
    //         $('.grid-container').removeClass('active')
    //     });
    // }


    // target_item.attr('data-after', 'MES-PROJETS');


});


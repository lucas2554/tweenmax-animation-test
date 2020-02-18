$(document).ready(function () {
    // alert("ok")
});

let circle = $('.circle');
let targetItem = $('.background');
let bc = $('.background');
let tl1 = new TimelineLite();
let tl2 = new TimelineLite();

function moveCircle(e) {
    TweenLite.to(circle, 0.3, {
        css: {
            left: e.pageX,
            top: e.pageY
        }
    });
    // console.log(e)
}

$(window).mousemove(function (e) {
    parallaxIt(e, bc, -5);
});

function parallaxIt(e, target, movement) {
    var $this = $(".background");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}


targetItem.on("mouseover", function (event) {
    tl1.staggerFrom(circle, 0.2, {scale: 1.8, content: '<h1>test</h1>'});
    circle.append('<h1>test</h1>')

});

targetItem.on('mouseleave', function (event) {
    tl2.staggerFrom(circle, 0.2, {scale: 1});
    $('.circle h1').remove();
});


$(window).on('mousemove', moveCircle);

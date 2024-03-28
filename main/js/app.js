document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge: "right",
    });

    var carouselElms = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElms, {
        fullWidth: true,
        indicators: true,
    });
     setInterval(function(){
        M.Carousel.getInstance(carouselElms[0]).next()
     } , 5000)
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge: "right",
    });

    var carouselElms = document.querySelectorAll('.carousel.top_carousel');
    M.Carousel.init(carouselElms, {
        fullWidth: true,
        indicators: true,
        onCycleTo: function () {
            let elems = document.querySelectorAll('.top_text');
            for (const item of elems) {
                item.classList.remove('isShow');
                setTimeout(function () {
                    item.classList.add('isShow')
                }, 700)
            }
        },
    });


    var GalleryItem = document.querySelectorAll('.carousel.gallery_div');
    M.Carousel.init(GalleryItem, {});

    var simpleItem = document.querySelectorAll('.simple_item');
    for (const item of simpleItem) {
        item.addEventListener('click', function () {
            document.getElementById('gallery_section').classList.add('active');
        })
    }

    document.getElementById('close_gallery_section').addEventListener('click', function () {
        document.getElementById('gallery_section').classList.remove('active');
    })

    setInterval(function () {
        M.Carousel.getInstance(carouselElms[0]).next()
    }, 5000)

    var elemsFloatingButton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elemsFloatingButton, {});

    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});

    var textAreaElm = document.querySelectorAll('.materialize-textarea');
    M.CharacterCounter.init(textAreaElm)

    document.getElementById('confirm_comment').addEventListener('click', function () {
        M.toast({
            html: 'نظر شما با موفقیت ثبت شد!',
            classes: 'pink leghten-3'
        })
    })

});
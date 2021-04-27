$(".slider-for3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    variableWidth: !0,
    centerMode: !0,
    infinite: !0,
    centerPadding: "60px",
    responsive: [{
        breakpoint: 550,
        settings: {
            slidesToShow: 1,
            centerPadding: "0px",
            slidesToScroll: 1,
            variableWidth: !1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            centerPadding: "0px",
            slidesToScroll: 1,
            variableWidth: !1
        }
    }]
}), $(".swiper-button-next").on("click", function () {
    $(".slider-for3").slick("slickNext")
}), $(".swiper-button-prev").on("click", function () {
    $(".slider-for3").slick("slickPrev")
});
function reviewsSlider(){ $('.reviews__wrapper').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: $('.reviews__nav--prev'),
    nextArrow: $('.reviews__nav--next'),
  })
  }

  export default reviewsSlider;

import 'slick-carousel';

const Sliders = () => {
  const $homeSlider = $('.tahiti-home-slider');
  const $tahitiOffers = $('.js-tahiti-offer');
  const $tahitiOfferPics = $('.js-tahiti-offer-pic');
  const $homeNews = $('.js-home-news');
  const screenWith = window.innerWidth;
  const opts = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  $homeSlider.slick({
    autoplay: true,
    arrows: true,
  });

  if (screenWith <= 768) {
    $tahitiOffers.slick(opts);
    $tahitiOfferPics.slick(opts);
    $homeNews.slick(opts);
  }

  // DESTINATION PAGE
  const $destinationSlider = $('.destination-slider');
  const destinationOpts = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="icon-angle-right slick-icon slick-icon--right"></button>',
    nextArrow: '<button type="button" class="icon-angle-left slick-icon slick-icon--left"></button>',
  };

  $destinationSlider.slick(destinationOpts);
};

export default Sliders;

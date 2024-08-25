$(function() {
  
  const headerSlider = new Swiper('.mosaic-slider__items_wrapper', {
    loop: true,
    navigation: {
      nextEl: '.mosaic-slider__arrow--next',
      prevEl: '.mosaic-slider__arrow--prev',
    },
    autoplay: {
      delay: 5000,
    },
    effect: 'cube',
    slidesPerView: 1,
    pagination: {
      el: '.mosaic-slider__pagination',
      bulletClass: 'mosaic-slider__pagination_item mosaic-slider__pagination_item--u-if94vj4qq',
      bulletActiveClass: 'is-active',
      clickable: true
    }
  });

  const servicesSlider = new Swiper('.blocklist__items_wrapper', {
    loop: true,
    navigation: {
      nextEl: '.blocklist__arrow--next',
      prevEl: '.blocklist__arrow--prev',
    },
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.blocklist__pagination',
      bulletClass: 'blocklist__pagination_item blocklist__pagination_item--u-itfcrnumc',
      bulletActiveClass: 'is-active',
      clickable: true
    },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3
      }
    }
  });

  $('.mosaic-tabs__item').each(function(i, $el) {
    $($el).on('click', function(e) {
      $('.mosaic-tabs__item, .mosaic-tabs__content__outer').removeClass('is-opened');
      $($el).addClass('is-opened');
      $($('.mosaic-tabs__content__outer')[i]).addClass('is-opened');
    });
  });

  $('.button-up').on('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $('.side-panel__button-open').on('click', () => {
    $('.side-panel__mask, .side-panel__content').addClass('is-opened');
  });

  $('.side-panel__mask, .side-panel__button-close').on('click', () => {
    $('.side-panel__mask, .side-panel__content').removeClass('is-opened');
  });

  $('.hor-menu__link').on('click', function(e) {
    e.preventDefault();
    const id = $(this).attr('href');
    window.scrollTo({ top: $(id).offset().top, behavior: 'smooth' });
  });

  $('.ver-menu__link').on('click', function(e) {
    e.preventDefault();
    $('.side-panel__mask, .side-panel__content').removeClass('is-opened');
    const id = $(this).attr('href');
    window.scrollTo({ top: $(id).offset().top - 50, behavior: 'smooth' });
  });

  $('.link-universal').on('click', function(e) {
    const data = $.parseJSON($(this).attr('data-do-link_universal'));
    if (data && data.screen.popup) {
      $(`#${data.screen.popup} .mosaic-popup__inner-bg`).addClass('is-opened');
      $('html').addClass('overflow-hidden');
    }
  });

  $('.mosaic-popup__close, .mosaic-popup__inner-bg').on('click', function() {
    $(`.mosaic-popup__inner-bg`).removeClass('is-opened');
    $('html').removeClass('overflow-hidden');
  });

  $(".mosaic-popup__inner-bg .mosaic-popup__inner-data").click(function(e) {
    e.stopPropagation();
  });

  $('a[href="#"]').click(e => e.preventDefault());

});
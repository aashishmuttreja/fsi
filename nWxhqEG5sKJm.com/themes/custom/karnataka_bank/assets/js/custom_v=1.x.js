function sliderFunc(sliderParent, sliderProp = sliderProperties) {
  if (sliderParent.length) {
    if (sliderParent.hasClass("slick-initialized")) {
      sliderParent.slick("unslick");
    } else {
      sliderParent.not(".slick-initialized").slick(sliderProp);
    }
  }
}


$(".jsBannerSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsBannerSlider .banner-row").length <= 1) {
    $(".jsBannerSlider").removeClass("slick-dotted");
  } else {
    $(".jsBannerSlider").addClass("slick-dotted");
  }
}
);

const bannerSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

// $(".jsGalleryModalSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
//   if ($(".jsGalleryModalSlider .gallery-pop-row").length <= 1) {
//     $(".jsGalleryModalSlider").removeClass("slick-dotted");
//   } else {
//     $(".jsGalleryModalSlider").addClass("slick-dotted");
//   }
// }
// );



const reliabilitySlider = {
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsRewardSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsRewardSlider .banking-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsRewardSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsRewardSlider").addClass("slick-dotted");
  }
}
);
const rewardSlider = {
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsBankingSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsBankingSlider .banking-slider-row").length <= 2) {
    if ($(window).width() > 767) {
      $(".jsBankingSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsBankingSlider").addClass("slick-dotted");
  }
}
);

const bankingSlider = {
  infinite: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsRewardSlider2").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsRewardSlider2 .banking-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsRewardSlider2").removeClass("slick-dotted");
    }
  } else {
    $(".jsRewardSlider2").addClass("slick-dotted");
  }
}
);
const rewardSlider2 = {
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '28px'
      },
    },
  ],
};

$(".jsGallerySlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsGallerySlider .gallery-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsGallerySlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsGallerySlider").addClass("slick-dotted");
  }
}
);
const gallerySlider = {
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '28px'
      },
    },
  ],
};

$(".jsTeamSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsTeamSlider .banking-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsTeamSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsTeamSlider").addClass("slick-dotted");
  }
}
);
const teamSlider = {
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '28px'
      },
    },
  ],
};


$(".jsMasterMobileBanking").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsMasterMobileBanking .list-cols-outer").length <= 2) {
    if ($(window).width() > 767) {
      $(".jsMasterMobileBanking").removeClass("slick-dotted");
    }
  } else {
    $(".jsMasterMobileBanking").addClass("slick-dotted");
  }
}
);

const masterMobileBanking = {
  infinite: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '26px'
      },
    },
  ],
};



$(".jsEaseSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsEaseSlider .banking-slider-row").length <= 2) {
    if ($(window).width() > 767) {
      $(".jsEaseSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsEaseSlider").addClass("slick-dotted");
  }
}
);

const easeSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const easeSlider2 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsFeaturesSlider ").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsFeaturesSlider .banking-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsFeaturesSlider ").removeClass("slick-dotted");
    }
  } else {
    $(".jsFeaturesSlider ").addClass("slick-dotted");
  }
}
);

const featuresSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsFeaturesSlider2").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsFeaturesSlider2 .banking-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsFeaturesSlider2 ").removeClass("slick-dotted");
    }
  } else {
    $(".jsFeaturesSlider2").addClass("slick-dotted");
  }
}
);

const featuresSlider2 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsFeaturesSlider3").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsFeaturesSlider3 .banking-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsFeaturesSlider3 ").removeClass("slick-dotted");
    }
  } else {
    $(".jsFeaturesSlider3").addClass("slick-dotted");
  }
}
);

const featuresSlider3 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsAccountsSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsAccountsSlider .accounts-slider-col").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsAccountsSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsAccountsSlider").addClass("slick-dotted");
  }
}
);

const accountsSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsCreditCardSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsCreditCardSlider .lets-compare-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsCreditCardSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsCreditCardSlider").addClass("slick-dotted");
  }
}
);

const creditCardSlider = {
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '26px'
      },
    },
  ],
};

$(".jsBrandSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsBrandSlider .brands-row").length <= 5) {
    if ($(window).width() > 991) {
      $(".jsBrandSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsBrandSlider").addClass("slick-dotted");
  }
}
);

const brandSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
      },
    },
  ],
};


$(".jsPartnerSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsPartnerSlider .brands-row").length <= 6) {
    if ($(window).width() > 991) {
      $(".jsPartnerSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsPartnerSlider").addClass("slick-dotted");
  }
}
);

const PartnerSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px'
      },
    },
  ],
};


$(".jsEaseCardSlider1").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsEaseCardSlider1 .banking-slider-row").length <= 2) {
    if ($(window).width() > 767) {
      $(".jsEaseCardSlider1").removeClass("slick-dotted");
    }
  } else {
    $(".jsEaseCardSlider1").addClass("slick-dotted");
  }
}
);

const easeCardSlider1 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};


$(".jsEaseCardSlider2").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsEaseCardSlider2 .banking-slider-row").length <= 2) {
    if ($(window).width() > 767) {
      $(".jsEaseCardSlider2").removeClass("slick-dotted");
    }
  } else {
    $(".jsEaseCardSlider2").addClass("slick-dotted");
  }
}
);

const easeCardSlider2 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsEaseCardSlider3").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsEaseCardSlider3 .banking-slider-row").length <= 2) {
    if ($(window).width() > 767) {
      $(".jsEaseCardSlider3").removeClass("slick-dotted");
    }
  } else {
    $(".jsEaseCardSlider3").addClass("slick-dotted");
  }
}
);

const easeCardSlider3 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

$(".jsEaseCardSlider4").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsEaseCardSlider4 .banking-slider-row").length <= 2) {
    if ($(window).width() > 767) {
      $(".jsEaseCardSlider4").removeClass("slick-dotted");
    }
  } else {
    $(".jsEaseCardSlider4").addClass("slick-dotted");
  }
}
);
const easeCardSlider4 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};


$(".jsKblSlider1").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsKblSlider1 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsKblSlider1").removeClass("slick-dotted");
    }
  } else {
    $(".jsKblSlider1").addClass("slick-dotted");
  }
}
);

const KblSlider1 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};

$(".jsKblSlider2").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsKblSlider2 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsKblSlider2").removeClass("slick-dotted");
    }
  } else {
    $(".jsKblSlider2").addClass("slick-dotted");
  }
}
);

const KblSlider2 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};

$(".jsKblSlider3").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsKblSlider3 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsKblSlider3").removeClass("slick-dotted");
    }
  } else {
    $(".jsKblSlider3").addClass("slick-dotted");
  }
}
);

const KblSlider3 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};

$(".jsKblSlider4").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsKblSlider4 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsKblSlider4").removeClass("slick-dotted");
    }
  } else {
    $(".jsKblSlider4").addClass("slick-dotted");
  }
}
);

const KblSlider4 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};


$(".jsLifeSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsLifeSlider .kbl-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsLifeSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsLifeSlider").addClass("slick-dotted");
  }
}
);

const lifeSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};

$(".jsGeneralSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsGeneralSlider .kbl-slider-row").length <= 3) {
    if ($(window).width() > 991) {
      $(".jsGeneralSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsGeneralSlider").addClass("slick-dotted");
  }
}
);

const generalSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};


$(".jsPmSlider1").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsPmSlider1 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsPmSlider1").removeClass("slick-dotted");
    }
  } else {
    $(".jsPmSlider1").addClass("slick-dotted");
  }
}
);

const PmSlider1 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};

$(".jsPmSlider2").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsPmSlider2 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsPmSlider2").removeClass("slick-dotted");
    }
  } else {
    $(".jsPmSlider2").addClass("slick-dotted");
  }
}
);

const PmSlider2 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};

$(".jsJjbySlider1").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsJjbySlider1 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsJjbySlider1").removeClass("slick-dotted");
    }
  } else {
    $(".jsJjbySlider1").addClass("slick-dotted");
  }
}
);

const JjbySlider1 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};

$(".jsJjbySlider2").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsJjbySlider2 .kbl-slider-row").length <= 4) {
    if ($(window).width() > 991) {
      $(".jsJjbySlider2").removeClass("slick-dotted");
    }
  } else {
    $(".jsJjbySlider2").addClass("slick-dotted");
  }
}
);

const JjbySlider2 = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};


$(".jsASBASlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsASBASlider .kbl-slider-row").length <= 5) {
    if ($(window).width() > 991) {
      $(".jsASBASlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsASBASlider").addClass("slick-dotted");
  }
}
);

const ASBASlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};



$(".jsBillKindsSlider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
  if ($(".jsBillKindsSlider .flex-row-col").length <= 3) {
    if ($(window).width() > 767) {
      $(".jsBillKindsSlider").removeClass("slick-dotted");
    }
  } else {
    $(".jsBillKindsSlider").addClass("slick-dotted");
  }
}
);

const billKindsSlider = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 576,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "50px"
      },
    },
    {
      breakpoint: 359,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "26px"
      },
    },
  ],
};


// var bottomHeader = $(".header-bottom").outerHeight() + 15;
// var topHeader = $(".header-top").outerHeight();


$(document).ready(function () {


  sliderFunc($(".jsBannerSlider"), bannerSlider);
  sliderFunc($(".jsReliabilitySlider"), reliabilitySlider);
  sliderFunc($(".jsRewardSlider"), rewardSlider);
  sliderFunc($(".jsRewardSlider2"), rewardSlider2);
  sliderFunc($(".jsBankingSlider"), bankingSlider);
  sliderFunc($(".jsEaseSlider"), easeSlider);
  sliderFunc($(".jsEaseSlider2"), easeSlider2);  
  sliderFunc($(".jsAccountsSlider"), accountsSlider);
  sliderFunc($(".jsFeaturesSlider"), featuresSlider);
  sliderFunc($(".jsFeaturesSlider2"), featuresSlider2);
  sliderFunc($(".jsFeaturesSlider3"), featuresSlider3);
  sliderFunc($(".jsBrandSlider"), brandSlider);
  sliderFunc($(".jsPartnerSlider"), PartnerSlider);
  sliderFunc($(".jsGallerySlider"), gallerySlider);
  sliderFunc($(".jsTeamSlider"), teamSlider);
  sliderFunc($(".jsCreditCardSlider"), creditCardSlider);
  sliderFunc($(".jsEaseCardSlider1"), easeCardSlider1);
  sliderFunc($(".jsEaseCardSlider2"), easeCardSlider2);
  sliderFunc($(".jsEaseCardSlider3"), easeCardSlider3);
  sliderFunc($(".jsEaseCardSlider4"), easeCardSlider4);
  sliderFunc($(".jsKblSlider1"), KblSlider1);
  sliderFunc($(".jsKblSlider2"), KblSlider2);
  sliderFunc($(".jsKblSlider3"), KblSlider3);
  sliderFunc($(".jsKblSlider4"), KblSlider4);
  sliderFunc($(".jsLifeSlider"), lifeSlider);
  sliderFunc($(".jsGeneralSlider"), generalSlider);
  sliderFunc($(".jsPmSlider1"), PmSlider1);
  sliderFunc($(".jsPmSlider2"), PmSlider2);
  sliderFunc($(".jsJjbySlider1"), JjbySlider1);
  sliderFunc($(".jsJjbySlider2"), JjbySlider2);
  sliderFunc($(".jsASBASlider"), ASBASlider);
  sliderFunc($(".jsBillKindsSlider"), billKindsSlider);
  sliderFunc($(".jsMasterMobileBanking"), masterMobileBanking);


  $('.jsClosedVideoMoal').click(function () {
    $('#jsModalVideoUrl iframe').attr("src", "");
  })

  $('[data-bs-toggle="modal"]').click(function () {
    var dataVideoUrl = $(this).attr('data-video');
    console.log(dataVideoUrl);
    $('#jsModalVideoUrl iframe').attr("src", dataVideoUrl);
  })



  if ($(window).width() > 767) {
    if ($('.jsSbAccountSlider').hasClass('slick-initialized')) {
      $('.jsSbAccountSlider').slick('unslick');
    }
  } else {
    $('.jsSbAccountSlider').not('.slick-initialized').slick({
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '30px',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ]
    });
  }


  if ($('.jsMarquee').length > 0) {
    $('.jsMarquee').marquee({
      direction: 'left',
      speed: 40,
      gap: '0px',
      delayBeforeStart: 0,
      duplicated: true,
      startVisible: true,
      pauseOnHover: true
    });
  }

  $("#jsSelectPurpose").on("select2:select", function (e) {
    var jsShowPurposeImg = $(e.currentTarget).val();
    $('.jsShowPurposeImg').attr('src', jsShowPurposeImg);
  });

  
  $('.jsFilterBtns .filters-btns').click(function () {
    $(this).parents('.jsFilterBtns').addClass('active');
  })

  $('.jsFilterBtns .filter-closed').click(function () {
    $(this).parents('.jsFilterBtns').removeClass('active');
  })

   

  /*board of director*/
  if ($(window).width() < 768) {
    if ($('.jsBoardDirectorList .jsTeam-li').length < 6) {
      $('.jsBoardDirectorList').siblings('.board-director-more').addClass('d-none');
    }
    $('.jsBoardDirectorList .jsTeam-li').slice(0, 5).show();
    $("#jsBoardDirectorMore").on('click', function (e) {
      e.preventDefault();
      $(".jsBoardDirectorList .jsTeam-li:hidden").slice(0, 2).fadeIn();
      if ($(".jsBoardDirectorList .jsTeam-li:hidden").length == 0) {
        $("#jsBoardDirectorLess").removeClass('d-none').fadeIn('slow');
        $("#jsBoardDirectorMore").hide();
      }
    });
    $("#jsBoardDirectorLess").on('click', function (e) {
      e.preventDefault();
      $('.jsBoardDirectorList .jsTeam-li:not(:lt(5))').fadeOut();
      $("#jsBoardDirectorMore").fadeIn('slow');
      $("#jsBoardDirectorLess").hide();
    });
  }
  /*board of director*/

  /*select all filter js*/
  $("#filterSelectall").click(function () {
    $(".filterSelectedId").prop("checked", this.checked);
  });

  $(".filterSelectedId").change(function () {
    var check = $(".filterSelectedId").filter(":checked").length == $(".filterSelectedId").length;
    $("#filterSelectall").prop("checked", check);
  });
  /*select all filter js*/

  /*select all category js*/
  $("#categoriesSelectall").click(function () {
    $(".categoriesSelectedId").prop("checked", this.checked);
  });

  $(".categoriesSelectedId").change(function () {
    var check = $(".categoriesSelectedId").filter(":checked").length == $(".categoriesSelectedId").length;
    $("#categoriesSelectall").prop("checked", check);
  });
  /*select all category js*/

  /*select all media js*/
  $("#mediaSelectall").click(function () {
    $(".mediaSelectedId").prop("checked", this.checked);
  });

  $(".mediaSelectedId").change(function () {
    var check = $(".mediaSelectedId").filter(":checked").length == $(".mediaSelectedId").length;
    $("#mediaSelectall").prop("checked", check);
  });
  /*select all media js*/

  /*gallery filter*/
  var $btnsGallery = $('.jsGalleryBtn .nav-link').click(function () {
    if (this.id == 'all-gallery') {
      $('#gallery-parents > .gallery-row').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#gallery-parents > .gallery-row').not($el).hide();
    }
    $btnsGallery.removeClass('active');
    $(this).addClass('active');
  })
  /*gallery filter*/

  /*footer js*/
  $('.jsFooterAccordian .footer-head h4').each(function () {
    $(this).click(function () {
      $(this).toggleClass('active');
      $(this).parents('.footer-head').siblings('.footer-body').slideToggle();
      $(this).parents('.footer-col').siblings('.footer-col').find('.footer-head h4').removeClass('active');
      $(this).parents('.footer-col').siblings('.footer-col').find('.footer-body').slideUp();
    })
  })
  /*footer js*/

  $("[data-rel]").on("click", function () {
    $(this).toggleClass('active');
    $(this).parents('.jsCustomDropdown').toggleClass('show');
    $(this).parents('.jsCustomDropdown').find('[date-rel-dropdown]').toggleClass('d-none');
  });

  $(document).on("click", function (event) {
    var $trigger = $(".close-on-outside");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $("[data-rel]").removeClass("active");
      $(".jsCustomDropdown").removeClass("show");
      $("[date-rel-dropdown]").addClass("d-none");
    }
  });

  $.fn.hasAttr = function (dropdown) {
    return this.attr(dropdown) !== undefined;
  };

  /*Header sub mneu on hover */
  $(".jsMenuLinks [tab-menu]").hover(function () {
    var tab_id = $(this).attr("tab-menu");
    console.log(tab_id);
    $(this).parents(".jsMainSubMenu").find(".jsMenuLinks [tab-menu]").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".jsMainSubMenu").find(".indropdown-tabs").addClass("d-none");
    $("#" + tab_id).removeClass("d-none");
  });
  /*Header sub mneu on hover */


  /*Header*/

  /* hamburger menu start */
  $(".hamburger-menu").click(function () {
    $(this).toggleClass("animate-hamburger");
    $("body").toggleClass("tab-overflow");
    $("body").removeClass("scroll-hide-xs");
    $(".mob-header").toggleClass("opened");
    $('.js-close-details').removeClass('active-sub');
  });
  /* hamburger menu end */

  if ($(window).width() < 992) {
    $('.jsTabClicks').click(function () {
      $('.hamburger-menu').removeClass("animate-hamburger");
      $("body").removeClass("tab-overflow");
      $(".mob-header").removeClass("opened");
      $("body").removeClass("scroll-hide-xs");
      $('.js-close-details').removeClass('active-sub');
    })
  }

  if ($(window).width() < 768) {
    $('.jsMobSearch').click(function () {
      $("body").toggleClass("scroll-hide-xs");
      $('.hamburger-menu').removeClass("animate-hamburger");
      $("body").removeClass("tab-overflow");
      $(".mob-header").removeClass("opened");
      $('.js-close-details').removeClass('active-sub');
    })
  }

  $(".js-showDetail").click(function () {
    $("body").addClass("tab-overflow");
    ele_showDetail = $(this).attr("data-value");
    $(".js-close-details").removeClass("active-sub");
    $("#" + ele_showDetail).addClass("active-sub");
    // $(".mob-inner-header").addClass("d-none");
  });

  $(".js-menu-back").click(function () {
    $("body").addClass("tab-overflow");
    $(this).parents(".js-close-details").removeClass("active-sub");
    // $(".mob-inner-header").removeClass("d-none");
  });

  $(".js-mobsubmenu .js-accord-col-mob .submenu-head .submenu-head-arrow").each(function () {
    $(this).click(function () {
      $(this).parents(".submenu-head").toggleClass("main-opened");
      $(this).parents(".submenu-head").siblings(".accord-body").slideToggle();
      $(this).parents(".js-accord-col-mob").siblings(".js-accord-col-mob").find(".submenu-head").removeClass("main-opened");
      $(this).parents(".js-accord-col-mob").siblings(".js-accord-col-mob").find(".accord-body").slideUp();
    });
  }
  );

  $(".js-sub-accordian2 [subaccord-head]").each(function (ele) {
    $(this).click(function () {
      $(this).parents('.subaccord-head').toggleClass("subs-opned2");
      $(this).parents(".subaccord-head").siblings("[subaccord-body]").slideToggle('500');
      $(this).parents("[subaccord-row]").siblings("[subaccord-row]").find(".subaccord-head").removeClass("subs-opned2");
      $(this).parents("[subaccord-row]").siblings("[subaccord-row]").find("[subaccord-body]").slideUp();
    });
  });

  $(".jsMainAccordian .jsMainHeads").each(function (ele) {
    $(this).click(function () {
      $(this).parents('.main-accord-head').toggleClass("active");
      $(this).parents(".main-accord-head").siblings(".jsMainBody").slideToggle('500');
      $(this).parents(".jsMainRows").siblings(".jsMainRows").find(".main-accord-head").removeClass("active");
      $(this).parents(".jsMainRows").siblings(".jsMainRows").find(".jsMainBody").slideUp();
    });
  });



  $(".jsToggleMenu").on("click", function (e) {
    if ($(window).width() < 768) {
      if (
        $(this).parents(".jsDropdownCntr").find(".jsDropdown").css("display") ==
        "none"
      ) {
        $(".jsDropdown").hide();
        $(".submenu-dropdown").hide();
        $(this).parents(".jsDropdownCntr").addClass("open");
        $(this).parents(".jsDropdownCntr").find(".jsDropdown").show();
      } else {
        $(this).parents(".jsDropdownCntr").removeClass("open");
        $(this).parents(".jsDropdownCntr").find(".jsDropdown").hide();
      }
    }
  });

  $(".jsNestedlast").on("click", function (e) {
    if (
      $(this).parents(".sub-list").find(".submenu-dropdown").css("display") ==
      "none"
    ) {
      $(".submenu-dropdown").hide();
      $(this).parents(".sub-list").addClass("open");
      $(this).parents(".sub-list").find(".submenu-dropdown").show();
    } else {
      $(this).parents(".sub-list").removeClass("open");
      $(this).parents(".sub-list").find(".submenu-dropdown").hide();
    }
  });

  $(".custom-dropdown-menu.big-menu .dropdown-menu-list").on(
    "mouseover",
    function () {
      if ($(window).width() > 767) {
        $(
          ".custom-dropdown-menu.big-menu .dropdown-menu-list .sub-list:first-child"
        ).removeClass("active");
      }
    }
  );
  $(".custom-dropdown-menu.big-menu .dropdown-menu-list").on(
    "mouseleave",
    function () {
      if ($(window).width() > 767) {
        $(
          ".custom-dropdown-menu.big-menu .dropdown-menu-list .sub-list:first-child"
        ).addClass("active");
      }
    }
  );

  $('.jsShowNextStep').click(function () {
    $('.jsTwoStepGoal').removeClass('d-none');
    $('.jsFirstSTepGoal').addClass('d-none');
    $(".jsEaseSlider3").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
      if ($(".jsEaseSlider3 .banking-slider-row").length <= 2) {
        if ($(window).width() > 991) {
          $(".jsEaseSlider3").removeClass("slick-dotted");
        }
      } else {
        $(".jsEaseSlider3").addClass("slick-dotted");
      }
    }
    );

    $('.jsEaseSlider3').slick({
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        ,
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    });
    // $(".slick-slider").slick("refresh");    
  })

  $('.jsShowFirstStep').click(function () {
    $('.jsTwoStepGoal').addClass('d-none');
    $('.jsFirstSTepGoal').removeClass('d-none');
  })


  $('.jsPersonalAssistBtn').click(function () {
    $('.jsFormMobile').addClass('d-none');
    $('.jsFormMobileThnaks').removeClass('d-none');
  })

  // $('.jsReadMoreLink').click(function () {
  //   $(this).parents('.para-read-more').find('.read-remaining-text').toggleClass('d-none');
  //   if (($(this).text()) == "Read more") {
  //     $(this).text("Read less");
  //   } else {
  //     $(this).text("Read more");
  //   }
  // });


  $('.jsReadMoreLink').click(function () {
    $(this).parents('.para-read-more').find('.read-remaining-text').removeClass('d-none');
    $(this).addClass('d-none');
    $('.jsReadLessLink').removeClass('d-none');
  });
  $('.jsReadLessLink').click(function () {
    $(this).parents('.para-read-more').find('.read-remaining-text').addClass('d-none');
    $(this).addClass('d-none');
    $('.jsReadMoreLink').removeClass('d-none');
  });


  /*century slider*/
  $('.js-slider-for').slick({
    arrows: true,
    dots: false,
    speed: 500,
    infinite: false,
    swipe: false,
    asNavFor: '.js-cent-year-slider, .js-slick-dots-thumb, .js-cent-logo-slider'
  });

  $('.js-cent-year-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    centerMode: true,
    centerPadding: "80px",
    draggable: false,
    vertical: true,
    verticalScrolling: true,
    focusOnSelect: true,
    asNavFor: '.js-slick-dots-thumb, .js-slider-for, .js-cent-logo-slider'
  });

  $('.js-cent-logo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    fade: true,
    swipe: false,
    asNavFor: '.js-slick-dots-thumb, .js-slider-for, .js-cent-year-slider'
  });


  $('.js-slick-dots-thumb').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    draggable: true,
    swipe: false,
    // fade: true,
    variableWidth: true,
    infinite: false,
    asNavFor: '.js-cent-year-slider, .js-slider-for, .js-cent-logo-slider',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          slidesToShow: 8
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 6,
          fade: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 4,
          fade: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 4,
          fade: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 4,
          fade: false,
          variableWidth: false,
        }
      }
    ]
  });
  /*century slider*/


  
  if ($(window).width() > 767) {

  }

  $.fn.scrollCenter = function (elem, speed) {
    var active = jQuery(this).find(elem);
    var activeWidth = active.width() / 2;
    var pos = active.position().left + activeWidth;
    var currentscroll = jQuery(this).scrollLeft();
    var divwidth = jQuery(this).width();
    pos = pos + currentscroll - divwidth / 2;

    jQuery(this).animate(
      {
        scrollLeft: pos,
      },
      speed == undefined ? 1000 : speed
    );
    return this;
  };
  $(".custom-nav-tabs li").on("click", function () {
    $(".custom-nav-tabs li").removeClass("scroll");
    $(this).addClass("scroll");
    $(".custom-nav-tabs").scrollCenter(".scroll", 300);
  });

  $(".horizontal-nav-tabs li").on("click", function () {
    $(".horizontal-nav-tabs li").removeClass("scroll");
    $(this).addClass("scroll");
    $(".horizontal-nav-tabs").scrollCenter(".scroll", 300);
  });


  // $(".sticky-sidebar").css({
  //   top: bottomHeader,
  // });




  if ($(".navigation-scroll").length > 0) {
    $(".navigation-scroll").mCustomScrollbar({
      axis: "y",
    });
  }

  var selectLength = $(".js-select").length;
  if (selectLength > 0) {
    $(".js-select").select2({
      placeholder: "Select",
      allowClear: false,
      minimumResultsForSearch: -1,
    });
  }

  var selectLength1 = $(".jsSelectSearch").length;
  if (selectLength1 > 0) {
    $(".jsSelectSearch").select2({
      placeholder: "Select",
    });
  }

  $('.custom-filter-wrap .dropdown-menu').click(function (event) {
    event.stopPropagation();
  });

  $('.jsApplyFilter').click(function () {
    $(this).parents('.custom-filter-wrap').find('.dropdown-toggle').addClass('active');
    $('.dropdown-toggle').removeClass('show');
    $('.custom-filter-wrap .dropdown-menu').removeClass('show');
    $(this).parents('.custom-filter-wrap').find('.jsFilterCount').removeClass('d-none');
    $('.jsCompareAccounts').removeClass('d-none');
  })

  $('.jsFilterClose').click(function () {
    $(this).closest('.jsFliterListRow').remove();
  });

  $('.jsClearBtn').click(function () {
    $('.jsFliterListRow').remove();
  });

  $('.jsAddCompareBtn').click(function () {
    $('.jsLetsCompareFilter').addClass('d-none');
    $('.jsStudentFilter').removeClass('d-none');
  });

  $('.jsCompareAccountsBtn').click(function () {
    window.location.replace('lets-compare.html');
  })

  $('.jsRequestCallBack').click(function () {
    $(this).addClass('d-none');
    $('.jsCallBackWrap').addClass('d-none');
    $('.jsReachingOut').removeClass('d-none');
  })

  $('.jsGetCallBackClose').click(function () {
    $('.jsCallBackWrap').removeClass('d-none');
    $('.jsReachingOut').addClass('d-none');
    $('.jsRequestCallBack').removeClass('d-none');
  })


  if ($(".features-box .nav-tabs .nav-link, .jsTabAnimationActive .nav-tabs .nav-link").length > 0) {
    $(".features-box .nav-tabs .nav-link, .jsTabAnimationActive .nav-tabs .nav-link").click(function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      $(".features-box .slider, .jsTabAnimationActive .slider").css({ "left": + position.left, "width": width });
      // console.log('hello');
    });

    var actWidth = $(".features-box .nav-tabs, .jsTabAnimationActive .nav-tabs").find(".active").parent("li").width();
    var actPosition = $(".features-box .nav-tabs .active, .jsTabAnimationActive .nav-tabs .active").position();
    $(".features-box .slider, .jsTabAnimationActive .slider").css({ "left": + actPosition.left, "width": actWidth });
    console.log(actWidth, actPosition);

    $(".nav-tabs .nav-item .nav-link").click(function () {
      $(".slick-slider").slick("refresh");
    });
  }

  $(".nav-tabs .nav-item .nav-link").click(function () {
    $(".jsKblSlider1, .jsKblSlider2, .jsKblSlider3, .jsKblSlider4, .jsEaseCardSlider1, .jsEaseCardSlider2, .jsEaseCardSlider3, .jsEaseCardSlider4, .jsPmSlider1, .jsPmSlider2, .jsJjbySlider1, .jsJjbySlider2").slick("refresh");
  });

  $('.jsContinueBtn').click(function () {
    $('.jsPlanStep').addClass('d-none');
    $('.jsPlanRecalculate').removeClass('d-none');
  })


  $('.jsStickyLink').click(function () {
    $('.jsStickyLink').removeClass('active');
    var dataLinkVal = $(this).attr('data-link');
    scrollTopElement(dataLinkVal);
    $(this).closest('.sticky-list').find('.jsStickyLink').addClass('active');
  })

  $('.jsChatInfo .chat-icon').click(function () {
    $(this).parents('.jsChatInfo').addClass('d-none');
    $('.jsTrigger').removeClass('d-none');
  })
  $('.jsTriggerClosed').click(function () {
    $('.jsChatInfo').removeClass('d-none');
    $('.jsTrigger').addClass('d-none');
  })

  $('.jsShowBranchBtn').click(function () {
    $('.jsContactUsFiled').addClass('d-none');
    $('.jsSearchResult').removeClass('d-none');
  })
  $('.jsBackToSearch').click(function () {
    $('.jsContactUsFiled').removeClass('d-none');
    $('.jsSearchResult').addClass('d-none');
  })

  // $('.jsMainAccordian .jsMainHeads').each(function(){
  //   $(this).click(function(){
  //     var acordianTop = $(this).parents('.jsMainRows').offset().top;
  //     $('html, body').animate({ 
  //       scrollTop: acordianTop - 72
  //     }, 100); 
  //   })    
  // })

  $('.jsEarningAddCompareBtn').click(function () {
    $('.jsLetsCompareFilter').addClass('d-none');
    $('.jsStudentFilter').removeClass('d-none');
  });

  $('.jsEarningCompareAccountsBtn').click(function () {
    window.location.replace('earning-lets-compare.html');
  })

  $('.jsFormRequestCallBack').click(function () {
    $('.jsCallBackForm').addClass('d-none');
    $('.jsFormMobileThnaks').removeClass('d-none');
  })

  if ($("#getCallDateTime").length > 0) {
    $('#getCallDateTime').datetimepicker({
      dateFormat: 'yy-mm-dd',    
    });
  }  

  if ($("#getDateTime").length > 0) {
    // $('#getDateTime').datepicker({}); 
    $( function() {
      $( "#getDateTime" ).datepicker();
    } );   
  }  

  

  findingCheckedVal();
  // stickySection();  

});

if ($(window).width() > 767) {
  stickySection();
}




var lenghtOfEarningChecks = $('.jsEarningsCheck').length;
function findingCheckedVal() {
  $('.filter-card-wrapper .jsEarningsCheck').change(function () {
    if ($('.jsEarningsCheck').is(':checked')) {
      $('.jsCompareAccounts').removeClass('d-none');
    } else {
      $('.jsCompareAccounts').addClass('d-none');
    }
  })
}

$(window).resize(function () {
  $(".slick-slider").slick("refresh");
  header_fixed();
});

$(window).on("load", function () {
  header_fixed();

});

$(window).on("scroll", function () {
  header_fixed();
});


/*floating section on scroll*/




if ($(window).width() < 992) {
  $(".js-floating").before('<div class="floating"></div>');
  $(window).scroll(function () {
    var headerHeight = $(".header-inner.affix").outerHeight();
    if ($(".js-floating").length > 0) {
      var ele_floating = $(".js-floating");
      var ele_height = $(ele_floating).outerHeight();
      var ele_position = $(".floating").position().top - headerHeight;
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= ele_position) {
        ele_floating.addClass("affix").css({ top: headerHeight }).prev(".floating").css("height", ele_height);
      } else {
        ele_floating.removeClass("affix").css({ top: "0" }).prev(".floating").css("height", "0");
      }
    }
  });
}


var NAVBAR_HEIGHT = $(".header-bottom").innerHeight();
function header_fixed() {
  var windowScroll = $(window).scrollTop();
  var topbarHeight = $(".header-top").innerHeight();
  if (windowScroll >= topbarHeight) {
    $(".header-inner").addClass("affix");
    $(".header").css("padding-top", NAVBAR_HEIGHT + topbarHeight);
  } else {
    $(".header-inner").removeClass("affix");
    $(".header").css("padding-top", 0);
  }
}

var windowScroll = $(window).scrollTop();
if (windowScroll > 1) {
  $(".new-header .header-inner").addClass("affix");
  $(".new-header").css("padding-top", NAVBAR_HEIGHT);
} else {
  $(".header-inner").removeClass("affix");
  $(".new-header").css("padding-top", 0);
}

function scrollTopElement(ele) {
  var headerOuterHeight = $('.header').outerHeight();
  var headerTopHeight = $('.header-top').outerHeight();
  var finalHeight = headerOuterHeight - headerTopHeight;
  $('html, body').animate({
    scrollTop: $(ele).offset().top - finalHeight
  }, 100);
}


function stickySection() {
  $(".js-opening-floating").before('<div class="floating"></div>');
  $(window).scroll(function () {
    var headerHeight = $(".header-inner.affix").outerHeight();
    if ($(".js-opening-floating").length > 0) {
      var ele_floating = $(".js-opening-floating");
      var ele_height = $(ele_floating).outerHeight();
      var ele_position = $(".floating").position().top - headerHeight;
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= ele_position) {
        ele_floating.addClass("affix").css({ top: headerHeight }).prev(".floating").css("height", ele_height);
      } else {
        ele_floating.removeClass("affix").css({ top: "0" }).prev(".floating").css("height", "0");
      }
    }
  });
}


/*custom acoordian scroll top*/
var accordion = (function () {

  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-headers');
  var $accordion_item = $('.js-accordion-item');

  // default settings 
  var settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: false
  };

  if ($(window).width() > 991) {
    var HeaderHeights = 72;
  } else {
    var HeaderHeights = 58;
  }

  return {
    // pass configurable object literal
    init: function ($settings) {
      $accordion_header.on('click', function () {
        accordion.toggle($(this));

        setTimeout(() => {
          $('body, html').animate({
            scrollTop: $(this).offset().top - (HeaderHeights + 15)
          }, 100)
        }, 400)
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }

      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-bodies').show();
    },
    toggle: function ($this) {

      if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-headers')[0]) {
        $this.closest('.js-accordion').find('> .js-accordion-item').removeClass('active').find('.js-accordion-bodies').slideUp()
      }

      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

/*custom acoordian scroll top*/
var accordionTab = (function () {

  var $accordion = $('.js-accordionTab');
  var $accordion_header = $accordion.find('.js-accordionTab-headers');
  var $accordion_item = $('.js-accordionTab-item');

  // default settings 
  var settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: false
  };

  if ($(window).width() > 991) {
    var HeaderHeights = 72;
  } else {
    var HeaderHeights = 120;
  }

  return {
    // pass configurable object literal
    init: function ($settings) {
      $accordion_header.on('click', function () {
        accordionTab.toggle($(this));

        setTimeout(() => {
          $('body, html').animate({
            scrollTop: $(this).offset().top - (HeaderHeights + 15)
          }, 100)
        }, 400)
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $('.js-accordionTab-item.active').length > 1) {
        $('.js-accordionTab-item.active:not(:first)').removeClass('active');
      }

      // reveal the active accordion bodies
      $('.js-accordionTab-item.active').find('> .js-accordionTab-bodies').show();
    },
    toggle: function ($this) {

      if (settings.oneOpen && $this[0] != $this.closest('.js-accordionTab').find('> .js-accordionTab-item.active > .js-accordionTab-headers')[0]) {
        $this.closest('.js-accordionTab').find('> .js-accordionTab-item').removeClass('active').find('.js-accordionTab-bodies').slideUp()
      }

      // show/hide the clicked accordion item
      $this.closest('.js-accordionTab-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function () {
  accordion.init({ speed: 300, oneOpen: true });
  accordionTab.init({ speed: 300, oneOpen: true });
  $('.js-accordion>.js-accordion-item>.js-accordion-headers').click(function () {
    $(this).siblings('.js-accordion-bodies').find('.js-accordion-item').removeClass('active');
  })
  $('.js-accordionTab>.js-accordionTab-item>.js-accordionTab-headers').click(function () {
    $(this).siblings('.js-accordionTab-bodies').find('.js-accordionTab-item').removeClass('active');
  })
});





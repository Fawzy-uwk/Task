$(document).ready(function () {
  $(".slider:not(.arabic-version .slider)").slick({
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    cssEase: "linear",

    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    infinte: false,
    responsive: [
      {
        breakpoint: 1024, // iPad Pro breakpoint
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10%",
          slidesToShow: 1,
          infinite: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "4%",
          slidesToShow: 1,
          infinte: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "2%",
          slidesToShow: 1,
          infinte: false,
        },
      },
    ],
  });

  $(".arabic-version .slider").slick({
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    cssEase: "linear",
    rtl: true,
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    infinte: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "2%",
          slidesToShow: 1,
          infinite: false,
        }, // iPad Pro breakpoint
      },
      

      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "4%",
          slidesToShow: 1,
          infinte: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "2%",
          slidesToShow: 1,
          infinte: false,
        },
      },
    ],
  });
});

//read more

const textElements = document.querySelectorAll(".text");
textElements.forEach((textElement) => {
  textElement.addEventListener("click", toggleReadMore);
});

// Toggle the expansion of the paragraph
function toggleReadMore(event) {
  const textElement = event.target;
  textElement.classList.toggle("expand");
}

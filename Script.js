$(document).ready(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    infinte: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "15%",
          slidesToShow: 1,
          infinte: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10%",
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

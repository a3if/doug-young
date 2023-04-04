const banner = document.querySelector(".banner");
const bannerHeight = Number(banner.getBoundingClientRect().height);

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.pageYOffset > bannerHeight - 50) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});

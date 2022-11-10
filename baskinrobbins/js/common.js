var mainBannerSwiper = new Swiper("#mainbanner", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

var sectionOneSwiper = new Swiper("#one .inner", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let familySite = document.querySelector("#familysite")
familySite.addEventListener("click",function(){
  familySite.classList.toggle("on");
})



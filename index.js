let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

window.onscroll = () => {
  MenuBtn.classList.remove("fa-times");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// Login Form
document.querySelector("#LoginBtn").onclick = () => {
  document.querySelector(".loginFormContainer").classList.toggle("active");
};
document.querySelector("#CloseLoginForm").onclick = () => {
  document.querySelector(".loginFormContainer").classList.remove("active");
};


// Swiper JS For Vehicle Slider
var swiper = new Swiper(".VehiclesSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



// Swiper JS For Review Slider
var swiper = new Swiper(".ReviewSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// like button
const button = document.querySelector(".heart-like-button");

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});
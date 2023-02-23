const schemeButtons = document.querySelectorAll(".scheme__button");
const mainButton = document.querySelector(".description__button");
const modal = document.querySelector(".modal");
const checkBoxes = document.querySelectorAll(".radio__input");
const pledges = document.querySelectorAll(".modal__pledge");
const schemes = document.querySelectorAll(".modal__scheme");
const headerButton = document.querySelector(".header__button");
const hamburgerOpen = document.querySelector(".header__icon-mobile--open");
const hamburgerClose = document.querySelector(".header__icon-mobile--close");
const nav = document.querySelector(".nav");
const menuWrapper = document.querySelector(".all__wrapper");

// closing and opening menu

headerButton.addEventListener("click", () => {
  hamburgerOpen.classList.toggle("active");
  hamburgerClose.classList.toggle("active");
  console.log(nav);
  if (hamburgerClose.classList.contains("active")) {
    nav.classList.add("active");
    menuWrapper.classList.add("active");
  } else {
    nav.classList.remove("active");
    menuWrapper.classList.remove("active");
  }
});

// opening and closing each pledge info with pledge information/ adding border to a scheme if active

checkBoxes.forEach((item, i) => {
  item.addEventListener("click", () => {
    pledges.forEach((pledge) => {
      pledge.classList.remove("active");
    });
    schemes.forEach((scheme) => {
      scheme.classList.remove("active");
    });
    pledges[i].classList.add("active");
    schemes[i].classList.add("active");
  });
});

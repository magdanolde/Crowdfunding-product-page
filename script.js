const schemeButtons = document.querySelectorAll(".scheme__button");
const pledgeButtons = document.querySelectorAll(".pledge__button");
const buttonsArray = [...schemeButtons];
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
const modalCloseBtn = document.querySelector(".modal__button");
const endPage = document.querySelector(".final");
const finalButton = document.querySelector(".final__button");
buttonsArray.push(mainButton);

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

// opening the schemes modal

// buttonsArray.forEach((button) => {
// button.addEventListener("click", () => modal.showModal());
// });
//
// closing the schemes modal

modalCloseBtn.addEventListener("click", () => modal.close());

// submitting pledge & opening the "thank you" modal & closing the scheme modal

pledgeButtons.forEach((button) => {
  const schemeInput = button.previousElementSibling.lastElementChild;
  button.addEventListener("click", () => {
    if (schemeInput.value === " " || schemeInput.value <= 0) {
      alert("You have to enter a number greater than 0");
    } else if (schemeInput.name === "medium" && schemeInput.value < 25) {
      alert("you have to pledge min. 25 $");
    } else if (schemeInput.name === "premium" && schemeInput.value < 75) {
      alert("you have to pledge min. 75 $");
    } else {
      schemeInput.value = " ";
      endPage.showModal();
    }
  });
});

// closing the "thank you" modal

finalButton.addEventListener("click", () => endPage.close());



 

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
const menuWrapper = document.querySelector(".header__wrapper");
const modalCloseBtn = document.querySelector(".modal__button");
const endPage = document.querySelector(".final");
const finalButton = document.querySelector(".final__button");
let budgetNumber = document.querySelector(".budget__number--budget")
let userNumber = document.querySelector(".budget__number--user")
const progressBar = document.querySelector(".budget__bar-inside")
let peopleNumber = parseFloat((userNumber.textContent).replace(/,/g, ''))
let initBudget=89914;
const people=[];
const budget=[];
buttonsArray.push(mainButton);
let initWidth = 78;

// closing and opening menu

headerButton.addEventListener("click", () => {
  hamburgerOpen.classList.toggle("active");
  hamburgerClose.classList.toggle("active");
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

// incresing the number of total pledge & numbers of pledgers

function add(accumulator, a) {
  return accumulator + a;
}

// submitting pledge & opening the "thank you" modal/closing the scheme modal/updating the numbers-counters

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
        people.push(1);
        const userSum = people.reduce(add, 0);
        userNumber.textContent = (peopleNumber + userSum).toLocaleString('en-IN');
        budget.push(parseFloat(schemeInput.value));
        const budgetSum = budget.reduce(add, 0);
        budgetNumber.textContent = "$"+(initBudget + budgetSum).toLocaleString('en-IN');
        progressBar.style.width = parseFloat(initWidth + userSum) + "%";
        schemeInput.value = " ";
        endPage.showModal();
    }
  });
  
});
// closing the "thank you" modal
//
finalButton.addEventListener("click", () => endPage.close());

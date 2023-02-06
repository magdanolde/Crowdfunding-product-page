const schemeButtons = document.querySelectorAll(".scheme__button");
const mainButton = document.querySelector(".description__button");
const modal = document.querySelector(".modal");

schemeButtons.forEach((item) => {
  item.addEventListener("click", () => {
    modal.showModal();
  });
});

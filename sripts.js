const menu = document.querySelector("#menu");
const menu_slide = document.querySelector("#menu-slide");
menu.addEventListener("click", () => {
  menu_slide.classList.toggle("disp");
});

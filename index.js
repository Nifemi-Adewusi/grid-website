/** @format */

const dateObject = new Date().getFullYear();
const dateElement = document.querySelectorAll(".year");
dateElement.forEach(function (el) {
  el.innerHTML = dateObject;
});

"use script";

const checkBox = document.querySelector(".checkbox");
const btnBox = document.querySelector(".header_btn-hidden");
const uploadBtn = document.querySelector(".check_box");

uploadBtn.addEventListener("click", function () {
  if (checkBox.checked) {
    btnBox.style.opacity = "1";
  } else {
    btnBox.style.opacity = "0";
    alert("Select the topic!");
  }
});

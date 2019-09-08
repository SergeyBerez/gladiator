// var ul = document.querySelector(".main-navigation");
// var menu = document.querySelector(".menu-hidden");
// menu.addEventListener("click", function(e) {
//   ul.classList.toggle("show");
// });
//menu.onclick = function(e) {
// ul.classList.toggle("show");
// console.log(ul);

//console.log(ul);
//};
// $(".menu-hidden").on("click", function() {
//   $(".main-navigation").slideToggle(300, function() {
//     if ($(this).css("display") == "none") {
//       $(this).removeAttr("style");
//     }
//   });
// });

// for (let i = 0; i < document.querySelectorAll("a").length; i++) {
//   document.querySelectorAll("a")[i].addEventListener("click", function(e) {
//     e.preventDefault();
//     // this.style.display = "none";
//     console.log(this);
//   });
// }
// document.addEventListener("click", function(e) {
//   console.log(e.target.tagName);
//   if (e.target.tagName) {
//     e.target.style.display = "none";
//   }
// });

// добавляем события за закритие гамбургер и показа меню
let menuHidden = document.querySelector(".menu-hidden");
let navBlock = document.querySelector(".main-navigation");

menuHidden.addEventListener("click", function(e) {
  // menuHidden.style.opacity = "0";
  navBlock.classList.add("show");
  this.style.opacity = "0";
});

document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("img-show-menu")) {
    navBlock.classList.remove("show");
    menuHidden.style.opacity = "1";
    console.log(1);
  }
});

window.addEventListener("resize", function() {
  menuHidden.style.opacity = "0";
  // if (menuHidden.style.opacity == "0") {
  //   menuHidden.style.opacity = "1";
  // } else menuHidden.style.opacity = "0";
});

// let spn = document.querySelector("ul>span");
// spn.onclick = function() {
//   navBlock.classList.remove("show");
//   menuHidden.style.opacity = "1";
// };
// menu.addEventListener("click", function(e) {
//   this.style.opacity = "0";
// });
//const element = spans[i];
// but.addEventListener("click", function(e) {
//   console.log(this);
//   for (let i = 0; i < fotos.length; i++) {
//     fotos[i].classList.remove("scale2");
//   }
// });

// $(".menu-hidden").on("click", function() {
//   $(".main-navigation").slideToggle(400);
// });

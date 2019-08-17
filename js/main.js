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
var spans = document.querySelectorAll(".foto span");
var fotos = document.querySelectorAll(".foto");

var spans = document.querySelectorAll(".foto span");

for (let i = 0; i < fotos.length; i++) {
  fotos[i].addEventListener("click", function(e) {
    console.log(this);

    // fotos[i].style.transform = "scale(1)";
    fotos[i].classList.toggle("scale2");
  });
}
// добавляем события за закритие гамбургер и показа меню
let menuHidden = document.querySelector(".menu-hidden");
menuHidden.addEventListener("click", function(e) {
  this.style.opacity = "0";
  document.querySelector(".main-navigation").classList.add("show");
  // var a = document.querySelector("#menu-tag");

  // if (!a.checked) {
  //   this.style.opacity = "0";
  // }
});

let span = document.querySelector("ul>span");
span.onclick = function() {
  document.querySelector(".main-navigation").classList.remove("show");
  menuHidden.style.opacity = "1";
};
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

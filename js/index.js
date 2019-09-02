// (function() {
//   //модуль слайдера

//   function Slider(elements, auto, time) {
//     this.element = elements;
//     var i = 0;
//     // this.btn = btn;
//     this.time = time || 1000;
//     this.auto = auto;
//     var slider = this;
//     slider.next = function() {
//       slider.element[i].classList.remove("show1");
//       i++;

//       if (i >= slider.element.length) {
//         i = 0;
//       }
//       slider.element[i].classList.add("show1");
//     };

//     if (this.auto == "auto") {
//       setInterval(slider.next, this.time);
//     }

//     console.log(slider);
//   }
//   let contentItemsAll = document.querySelectorAll(".content-items");
//   console.log(contentItemsAll);
//   var newSlider = new Slider(contentItemsAll, "auto", 2000);
// })();

let contentItemsAll = document.querySelectorAll(".content-items");

let slider = [];

for (let i = 0; i < contentItemsAll.length; i++) {
  slider[i] = contentItemsAll[i];
  contentItemsAll[i].remove();
}
console.log(slider);
console.log(contentItemsAll);
let step = 0;
let offset = 0;

function draw(arguments) {
  let div = document.createElement("div");
  div = slider[step];

  div.classList.add("content-items");

  div.style.left = offset * 400 + "px";
  document.querySelector(".content-banner-wrap").appendChild(div);

  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function left(arguments) {
  let contentItemsAll2 = document.querySelectorAll(".content-items");
  let offset2 = 0;
  for (let i = 0; i < contentItemsAll2.length; i++) {
    contentItemsAll2[i].style.left = offset2 * 400 - 400 + "px";
    setInterval(function() {
      if (contentItemsAll2[i].style.color == "orange") {
        contentItemsAll2[i].style.color = " yellow";
        // contentItemsAll2[i].classList.add("tarnsform");
        contentItemsAll2[i].style.boxShadow = "0px 0px 15px inset yellow";
      } else {
        // contentItemsAll2[i].classList.remove("tarnsform");
        contentItemsAll2[i].style.color = "orange";
        contentItemsAll2[i].style.boxShadow = "0px 0px 15px inset orange";
      }
    }, 500);
    offset2++;
  }

  setTimeout(function() {
    contentItemsAll2[0].remove();
    draw();
  }, 1000);
}
draw();
draw();
slider[0].checked = false;

setInterval(function() {
  left();
}, 3000);
// document.querySelector(".label").checked;
// console.log(document.querySelector(".input").checked);
//функция раскраски элементов баннера  на главной старине
// let contentItems = document.querySelectorAll(".content-items");
// console.log(contentItems);
// for (let i = 0; i < contentItems.length; i++) {
//   setInterval(function() {
//     if (contentItems[i].style.color == "rgb(223, 226, 62)") {
//       contentItems[i].style.color = " rgb(243, 219, 6)";
//       contentItems[i].classList.add("tarnsform");
//       contentItems[i].style.boxShadow = "0px 0px 15px inset rgb(243, 219, 6)";
//     } else {
//       contentItems[i].classList.remove("tarnsform");
//       contentItems[i].style.color = "rgb(223, 226, 70)";
//       contentItems[i].style.boxShadow = "0px 0px 15px inset rgb(223, 226, 70)";
//     }
//   }, 100);
// }

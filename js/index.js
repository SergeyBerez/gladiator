let contentItems = document.querySelectorAll(".content-items");
for (let i = 0; i < contentItems.length; i++) {
  setInterval(function() {
    console.log(contentItems[i]);
    if (contentItems[i].style.color == "rgb(223, 226, 62)") {
      contentItems[i].style.color = " rgb(243, 219, 6)";
    } else {
      contentItems[i].style.color = "rgb(223, 226, 62)";
    }
  }, 500);
}

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
// setInterval(function() {
//   contentItemsAll[i].classList.remove("show1");
//   i++;
//   console.log(i);
//   if (i >= contentItemsAll.length) {
//     i = 0;
//   }
//   contentItemsAll[i].classList.add("show1");
// }, 3000);
for (let i = 0; i < contentItemsAll.length; i++) {
  slider[i] = contentItemsAll[i];
  contentItemsAll[i].remove();
}
console.log(slider[0]);
console.log(contentItemsAll);
let step = 0;
let offset = 0;

function draw(arguments) {
  let div = document.createElement("div");
  div = slider[step];
  // div.classList.add("content-items");
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
    offset2++;
  }

  setTimeout(function() {
    contentItemsAll2[0].remove();
    draw();
  }, 1000);
}
draw();
draw();

// document.onclick = left;

setInterval(function() {
  left();
  console.log(1);
}, 2000);

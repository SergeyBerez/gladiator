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

(function() {
  //модуль слайдера

  function Slider(elements, auto, time) {
    this.element = elements;
    var i = 0;
    // this.btn = btn;
    this.time = time || 1000;
    this.auto = auto;
    var slider = this;
    slider.next = function() {
      slider.element[i].classList.remove("show1");
      i++;

      if (i >= slider.element.length) {
        i = 0;
      }
      slider.element[i].classList.add("show1");
    };

    if (this.auto == "auto") {
      setInterval(slider.next, this.time);
    }

    console.log(slider);
  }
  let contentItemsAll = document.querySelectorAll(".content-items");
  console.log(contentItemsAll);
  var newSlider = new Slider(contentItemsAll, "auto", 2000);
})();
// let contentItemsAll = document.querySelectorAll(".content-items");
// console.log(contentItemsAll);
// let i = 0;
// setInterval(function() {
//   contentItemsAll[i].classList.remove("show1");
//   i++;
//   console.log(i);
//   if (i >= contentItemsAll.length) {
//     i = 0;
//   }
//   contentItemsAll[i].classList.add("show1");
// }, 3000);

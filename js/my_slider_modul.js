(function() {
  //модуль слайдера

  function Slider(elements, btn, auto, time) {
    this.element = elements;
    var i = 0;
    this.btn = btn;
    this.time = time || 1000;
    this.auto = auto;
    var slider = this;
    slider.next = function() {
      slider.element[i].classList.remove("showImg");
      i++;

      if (i >= slider.element.length) {
        i = 0;
      }
      slider.element[i].classList.add("showImg");
    };

    slider.prev = function() {
      slider.element[i].classList.remove("showImg");
      i--;

      if (i < 0) {
        i = slider.element.length - 1;
      }
      slider.element[i].classList.add("showImg");
    };

    slider.btn[0].onclick = slider.next;

    slider.btn[1].onclick = slider.prev;
    if (this.auto == "auto") {
      setInterval(slider.next, this.time);
    }

    console.log(slider);
  }

  var btn = document.querySelectorAll("button");

  var imgs = document.querySelectorAll(".foto img");
  console.log(imgs);
  var newSlider = new Slider(imgs, btn);
})();

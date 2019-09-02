(function() {
  //модуль слайдера

  function Slider(obj) {
    this.elements = document.querySelectorAll(obj.imgs);
    var i = 0;
    this.btn = document.querySelectorAll(obj.btn);
    this.time = obj.time || 1000;
    this.auto = obj.auto;
    var slider = this;
    console.log(slider);
    slider.next = function() {
      slider.elements[i].classList.remove("showImg");
      i++;

      if (i >= slider.elements.length) {
        i = 0;
      }
      slider.elements[i].classList.add("showImg");
    };

    slider.prev = function() {
      slider.elements[i].classList.remove("showImg");
      i--;

      if (i < 0) {
        i = slider.elements.length - 1;
      }
      slider.elements[i].classList.add("showImg");
    };

    this.btn[0].onclick = slider.next;

    this.btn[1].onclick = slider.prev;
    if (this.auto == "auto") {
      setInterval(slider.next, this.time);
    }
  }

  // var btn = document.querySelectorAll(".button-slider div");

  // var imgs = document.querySelectorAll(".foto img");
  // console.log(imgs);
  var newSlider = new Slider({
    imgs: ".foto img",
    btn: ".button-slider div",
    auto: "auto",
    time: 1000
  });
})();

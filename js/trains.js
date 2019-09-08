$(function() {
  console.log($);
  let divs = document.querySelectorAll(".content");
  let span = document.querySelectorAll(".show-content");
  // -------на чистом js--------------------
  // for (let i = 0; i < span.length; i++) {
  //   span[i].addEventListener("click", function(e) {
  //     if (this.nextElementSibling.style.display !== "none") {
  //       this.nextElementSibling.style.display = "none";
  //     } else {
  //       this.nextElementSibling.style.display = "block";
  //     }
  //   });
  // }
  // --------------------------------
  $(".show-content").on("click", function() {
    $(this)
      .next()
      .slideToggle(400);
  });
});

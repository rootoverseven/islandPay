(() => {
    let el = location.hash ? document.querySelector(`.hero .carousel ${location.hash}`) : null;
    if (el) {
        let carousel = el.closest('.carousel');
        carousel.querySelector('.active').classList.remove('active');
        let index = [...el.parentNode.children].indexOf(el);
        el.parentNode.prepend(el);
        el.classList.add('active');
        let indicators = carousel.querySelectorAll('.carousel-indicators-hero-list');
        indicators.forEach(el => {
            el.querySelector('.active').classList.remove('active');
            el.prepend(el.children[index]);
            el.firstElementChild.classList.add('active');
            [...el.children].forEach((el, i) => {
                el.dataset.slideTo = i;
            });
        })
    }
})();


function navdrop() {
  document.getElementById("myDropdown").classList.toggle("show");


}
function menuNav(x) {
  x.classList.toggle("change");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

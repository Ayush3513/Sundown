const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var fixed = document.querySelector(".new-fixed")
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){

        var img = e.getAttribute("data-image")
        fixed.style.display = "block"
        fixed.style.backgroundImage = `url(${img})`
        fixed.style.backgroundSize = `cover`
        
    })
    e.addEventListener("mouseleave",function(){

        fixed.style.display = "none"
        
    })

})

// JavaScript for the footer (if needed)
document.querySelector('.footer-newsletter form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert('Thank you for subscribing!');
      this.reset();
    }
  });
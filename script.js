document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.getElementById('portfolio-content').style.display = 'block';
    }, 3000);
});

var typed = new Typed('#element', {
    strings: ['Python Bot Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

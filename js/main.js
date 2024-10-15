document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        const portfolioContent = document.getElementById('portfolio-content');

        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 1s ease';

        setTimeout(function() {
            loadingScreen.style.display = 'none';

            portfolioContent.style.display = 'block';
            portfolioContent.style.opacity = '0';
            setTimeout(function() {
                portfolioContent.style.opacity = '1';
                portfolioContent.style.transition = 'opacity 1s ease';
            }, 50);
        }, 600);
    }, 4000);
});

const images = ['images/shalini.png', 'images/shalini2.png', 'images/shalini3.png', 'images/shalini4.png', 'images/shalini5.png'];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

document.getElementById('randomImage').src = getRandomImage();

window.addEventListener('scroll', function() {
    // No logic Needed
});

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.setProperty("--moveX1", Math.random() * 10 - 5);
    star.style.setProperty("--moveY1", Math.random() * 10 - 5);
    star.style.setProperty("--moveX2", Math.random() * 10 - 5);
    star.style.setProperty("--moveY2", Math.random() * 10 - 5);
    star.style.setProperty("--moveX3", Math.random() * 10 - 5);
    star.style.setProperty("--moveY3", Math.random() * 10 - 5);
    star.style.setProperty("--moveX4", Math.random() * 10 - 5);
    star.style.setProperty("--moveY4", Math.random() * 10 - 5);
    document.querySelector(".stars").appendChild(star);
}

for (let i = 0; i < 30; i++) {
    createStar();
}


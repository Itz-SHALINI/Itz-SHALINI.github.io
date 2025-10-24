const texts = ["Hello There", "I'm Shalini", "Im a Coder"];
  const typeSpeed = 100;
  const eraseSpeed = 60;
  const delayBetween = 1200;
  
  let textIndex = 0;
  let charIndex = 0;
  const typeText = document.getElementById("typeText");

  function type() {
    if (charIndex < texts[textIndex].length) {
      typeText.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typeSpeed);
    } else {
      setTimeout(erase, delayBetween);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typeText.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", type);


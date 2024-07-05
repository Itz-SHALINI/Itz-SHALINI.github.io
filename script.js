const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  
  if (!e.target.classList.contains("is-active")) {
    card.setAttribute("data-state", targetSection);
    sections.forEach(s => s.classList.remove("is-active"));
    buttons.forEach(b => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
  }
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

const toggleSwitch = document.getElementById('background-toggle');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    body.style.backgroundImage = "url('S/NightMode.png')";
  } else {
    body.style.backgroundImage = "url('S/DayMode.png')";
  }
});

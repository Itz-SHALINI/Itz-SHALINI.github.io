  const form = document.getElementById("my-form");
  const popup = document.getElementById("popup");

  form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showPopup("💖 Your message has been sent!");
        form.reset();
      } else {
        showPopup("⚠️ Oops! Something went wrong.");
      }
    } catch (err) {
      showPopup("⚠️ Failed to send message. Try again later.");
    }
  });

  function showPopup(message) {
    popup.textContent = message;
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);
  }
// script.js

function updateCountdown() {
  const eventDate = new Date("August 15, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  if (gap <= 0) {
    document.querySelector('.countdown-wrapper').innerHTML = "<h3>Event Started!</h3>";
    return;
  }

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission
  const form = e.target;
  const formData = new FormData(form);

  // Basic validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const affiliation = form.affiliation.value.trim();
  const category = form.category.value;

  if (!name || !email || !affiliation || !category) {
    alert("Please fill out all required fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Submit form data
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById("registrationSuccess").style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  }).catch(error => {
    console.error(error);
    alert("There was an error submitting the form. Please try again later.");
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("registrationForm");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Simulate successful submission
      document.getElementById("registrationSuccess").style.display = "block";
      regForm.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", () => {
      document.getElementById("contactSuccess").style.display = "block";
    });
  }
});



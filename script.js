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


const form = document.getElementById('registrationForm');
const popup = document.getElementById('popup');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fileInput = document.getElementById('fileUpload');
  const file = fileInput.files[0];

  if (!file || file.type !== 'application/pdf') {
    alert('Please upload a valid PDF file.');
    return;
  }

  // Simulate successful registration
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
    form.reset();
  }, 3000);
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", () => {
      document.getElementById("contactSuccess").style.display = "block";
    });
  }
});



// Get modal elements
const modal = document.getElementById('contactModal');
const contactMeBtn = document.getElementById('contactMeBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const contactForm = document.getElementById('contactForm');

// Show the modal when "Contact Me" is clicked
contactMeBtn.onclick = function() {
  modal.style.display = 'block';
}

// Close the modal when the "x" is clicked
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Handle form submission (can add further actions like sending data)
contactForm.onsubmit = function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    modal.style.display = 'none';
    // Here you can also add code to actually send the form data to an email or server.
  }
}
